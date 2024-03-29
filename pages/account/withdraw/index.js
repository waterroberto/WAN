import { Box, Button, Stack, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { Dash, Layout, Meta, MobileNav, Sidebar } from '../../../components';
import PopupModal from '../../../components/Global/Modal';
import PrivateRoute from '../../../components/auth/PrivateRoute';
import AppBar from '../../../components/dashboard/AppBar';
import Container from '../../../components/dashboard/Container';
import Transactions from '../../../components/dashboard/Transactions';
import VerifyAccount from '../../../components/dashboard/VerifyAccount';
import userDataContext from '../../../context/UserDataContext';
import logo from '../../../public/logo.png';
import { db } from '../../../services/firebase.config';
import { UserService } from '../../../services/user';

const Withdraw = () => {
  const { push } = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  const [asset, setAsset] = useState('depositBalance');
  const [amount, setAmount] = useState('');

  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [email, setEmail] = useState('');
  const [binanceId, setBinanceId] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const { userData } = useContext(userDataContext);

  const withdrawals = userData?.withdrawals;

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const validateFormInputs = () => {
    return (
      asset.trim().length > 0 && paymentMethod.trim().length > 0 && +amount > 0
    );
  };

  const placeWithdrawal = async () => {
    const codesRef = collection(db, 'codes');

    if (validateFormInputs()) {
      if (!(+amount > userData[asset])) {
        const data = {
          id: uuidv4(),
          status: 'pending',
          type: 'withdraw',
          amount: +amount,
          method: paymentMethod,
          asset,
          date: new Date(),
          bankName,
          accountNumber,
          accountHolder,
          email,
          binanceId,
        };

        setIsLoading(true);
        try {
          const withdrawalCode = prompt(
            'Input withdrawal code issued by admin: '
          );

          if (withdrawalCode) {
            console.log(userData.withdrawLimit);
            if (+amount < userData.withdrawLimit) {
              const q = query(
                codesRef,
                where('code', '==', withdrawalCode),
                where('used', '==', false)
              );

              cogoToast.loading('Loading...');

              await getDocs(q)
                .then((snapshot) => {
                  if (snapshot.docs.length > 0) {
                    snapshot.forEach((snap) => {
                      updateDoc(doc(db, 'codes', snap.id), {
                        ...snap.data(),
                        used: true,
                      });
                    });

                    UserService.sendWithdrawalRequest(userData.id, data).then(
                      () => {
                        const userRef = doc(db, 'users', userData.id);
                        getDoc(userRef).then((snap) => {
                          const data = snap.data();

                          updateDoc(userRef, {
                            [asset]: data[asset] - +amount,
                          }).then(() => {
                            cogoToast.success(
                              'Withdrawal placed. Contact admin for more information'
                            );
                            setModalOpen(false);
                          });
                        });
                      }
                    );
                  } else {
                    cogoToast.error('Invalid code');
                  }
                })
                .catch((error) => {
                  console.error('Error getting documents: ', error);
                });
            } else cogoToast.error('Cannot withdraw above withdrawal limit.');

            // await emailjs
            //   .send(
            //     'service_g0jgrtw',
            //     'template_ygsrbqm',
            //     {
            //       subject: 'New User Withdrawal!',
            //       receiver: '',
            //       message1: `A withdrawal of $${amount} has been placed by ${userData.fullname}`,
            //       message2: `
            //                   User Details:
            //                   Name: ${userData.fullname}
            //                   Email: ${userData.email}

            //                   Transaction Details:
            //                   Amount: $${amount}
            //                   Status: 'pending'
            //                   Date: ${parseDate(new Date().getTime())}
            //     `,
            //       to_email: 'admin@infinitefinance.online',
            //     },
            //     'CDbQ0enNBqu4x8OvS'
            //   )
            //   .then((res) => console.log(res));
          }
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          cogoToast.error('Cannot process payment at the moment');

          setIsLoading(false);
        }
      } else {
        cogoToast.error('Insufficient funds in this wallet');
      }
    } else cogoToast.error('Please provide valid details');
  };

  return (
    <PrivateRoute>
      <Meta
        title='Capital Trust Finance - Withdraw - Online'
        description='Capital Trust Financial Bank | Withdraw into your account'
      />
      <Dash />

      <Box minHeight='100vh'>
        <Sidebar>
          <Layout>
            <AppBar page='Withdraw' />
            <VerifyAccount />
            <Box
              sx={{
                width: '100%',
                maxWidth: '1024px',
                margin: 'auto',
                mb: 4,
              }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems='center'
                justifyContent='flex-start'
                gap={2}
                width='100%'
              >
                <Button
                  disableElevation
                  className='bg-primary hover:bg-secondary duration-500'
                  sx={{
                    color: '#fff',
                    borderRadius: 2,
                    minHeight: 96,
                    width: '100%',
                    background: 'var(--green)',
                  }}
                  onClick={handleOpen}
                >
                  TRANSFER TO MY ACCOUNT
                </Button>
              </Stack>
            </Box>
            <Container>
              <Typography color='#444'>WITHDRAWAL HISTORY</Typography>
              {(!withdrawals || withdrawals.length === 0) && (
                <Stack
                  alignItems='center'
                  justifyContent='center'
                  mt={8}
                  py={2}
                  sx={{ color: 'var(--mid)' }}
                >
                  <Box sx={{ fontSize: '64px' }}>
                    <FaFolderOpen />
                  </Box>
                  <Typography>No Transactions Yet</Typography>
                </Stack>
              )}
              {withdrawals && withdrawals.length > 0 && (
                <Transactions
                  transactions={withdrawals}
                  currency={userData?.currency}
                />
              )}
            </Container>
          </Layout>
        </Sidebar>
      </Box>

      <MobileNav />

      {/*  */}

      <PopupModal
        open={modalOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
        title='withdraw from your account'
        sx={{ maxWidth: '512px' }}
      >
        <div className='my-6'>
          <label htmlFor='balanceType' className='text-sm text-gray-300 mb-2'>
            Withdraw from:
          </label>
          <select
            name='balanceType'
            id='balanceType'
            className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
            onChange={(e) => setAsset(e.target.value.trim())}
          >
            <option value='depositBalance' defaultChecked>
              Deposit Balance ( {userData?.currency ?? '€'}
              {userData?.depositBalance.toLocaleString()})
            </option>
            <option value='incomeBalance'>
              Income Balance ( {userData?.currency ?? '€'}
              {userData?.incomeBalance.toLocaleString()})
            </option>
          </select>
        </div>
        {/*  */}
        <div className='my-6'>
          <label htmlFor='paymentMethod' className='text-sm text-gray-300 mb-2'>
            Payment Method
          </label>
          <select
            name='paymentMethod'
            id='paymentMethod'
            className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
            onChange={(e) => setPaymentMethod(e.target.value.trim())}
          >
            <option value='bank' defaultChecked>
              Bank
            </option>
            <option value='skrill'>Skrill</option>
            <option value='paypal'>Paypal</option>
            <option value='binance'>Binance</option>
          </select>
        </div>
        {/*  */}
        <div className='my-6'>
          <label htmlFor='amount' className='text-sm text-gray-300 mb-2'>
            Amount
          </label>
          <input
            type='number'
            id='amount'
            className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {paymentMethod === 'bank' && (
          <>
            <div className='my-6'>
              <label
                htmlFor='accountNumber'
                className='text-sm text-gray-300 mb-2'
              >
                Account Number
              </label>
              <input
                type='text'
                id='accountNumber'
                className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            {/*  */}
            <div className='my-6'>
              <label htmlFor='bankName' className='text-sm text-gray-300 mb-2'>
                Bank Name
              </label>
              <input
                type='text'
                id='bankName'
                className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>
          </>
        )}
        {/*  */}

        {paymentMethod !== 'bank' && (
          <div className='my-6'>
            <label htmlFor='email' className='text-sm text-gray-300 mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        {/*  */}
        {paymentMethod === 'binance' && (
          <div className='my-6'>
            <label htmlFor='binanceId' className='text-sm text-gray-300 mb-2'>
              Binance ID
            </label>
            <input
              type='text'
              id='binanceId'
              className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
              onChange={(e) => setBinanceId(e.target.value)}
            />
          </div>
        )}

        {/*  */}
        <div className='my-6'>
          <label htmlFor='accountHolder' className='text-sm text-gray-300 mb-2'>
            Account Holder Name
          </label>
          <input
            type='text'
            id='accountHolder'
            className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
            onChange={(e) => setAccountHolder(e.target.value)}
          />
        </div>
        <button
          type='button'
          className={`btn text-gray-50 rounded-md py-3 px-12 ${
            isLoading
              ? 'bg-gray-600 hover:bg-gray-600'
              : 'bg-primary hover:bg-secondary'
          }`}
          onClick={placeWithdrawal}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Withdraw'}
        </button>
      </PopupModal>
    </PrivateRoute>
  );
};

export default Withdraw;
