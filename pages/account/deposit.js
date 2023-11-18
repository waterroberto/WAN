import { Box, Button, Stack, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import React, { useContext, useMemo, useState } from 'react';
import { BiSolidBank } from 'react-icons/bi';
import { FaFolderOpen } from 'react-icons/fa';
import { MdArrowDropDown, MdOutlineContentCopy } from 'react-icons/md';
import { SiHiveBlockchain } from 'react-icons/si';
import { Dash, Meta, MobileNav, Sidebar } from '../../components';
import PopupModal from '../../components/Global/Modal';
import PrivateRoute from '../../components/auth/PrivateRoute';
import AppBar from '../../components/dashboard/AppBar';
import Container from '../../components/dashboard/Container';
import Transactions from '../../components/dashboard/Transactions';
import userDataContext from '../../context/UserDataContext';
import { UserService } from '../../services/user';

const Deposit = () => {
  const [open, setOpen] = useState(false);
  const { userData } = useContext(userDataContext);

  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const deposits = useMemo(() => {
    return userData?.transactions.filter(
      (trxn) => trxn.type.toLowerCase() === 'deposit'
    );
  }, [userData]);

  // const deposits = userData?.transactions.filter(
  //   (transaction) => transaction.type.toLowerCase() === 'deposit'
  // );

  const prices = {
    btc: 37088.1,
    eth: 1500,
    usdt: 600,
  };

  const wallet = ['bxhYoJCKfsPD1ghbqCd5sb5'];

  const bank = ['010101222'];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createNewDeposit = async () => {
    const data = {
      type: 'deposit',
      amount: +amount,
      method,
      date: new Date(),
      status: 'pending',
    };

    if (+amount > 0) {
      try {
        setIsLoading(true);

        if (data)
          await UserService.sendDepositRequest(userData.id, data).then(() => {
            cogoToast.success('Deposit placed.');
            handleClose();

            setAmount('');
            setMethod('');
          });

        // await emailjs
        //   .send(
        //     'service_g0jgrtw',
        //     'template_ygsrbqm',
        //     {
        //       subject: 'New User Deposit!',
        //       receiver: '',
        //       message1: `A deposit of $${amount} has been placed by ${userData.fullname}`,
        //       message2: `
        //                     User Details:
        //                     Name: ${userData.fullname}
        //                     Email: ${userData.email}

        //                     Transaction Details:
        //                     Status: 'pending'
        //                     Amount: $${amount}
        //                     Date: ${parseDate(new Date().getTime())}
        //       `,
        //       to_email: 'admin@infinitefinance.online',
        //     },
        //     'CDbQ0enNBqu4x8OvS'
        //   )
        //   .then((res) => console.log(res));

        setIsLoading(false);
      } catch (error) {
        console.log(error);

        setIsLoading(false);
        cogoToast.error('Error! Cannot place deposit ');
      }
    } else {
      cogoToast.error('Amount must be more than $0');
    }
  };

  return (
    <PrivateRoute>
      <Meta
        title='Massaa Online - Deposit - Online Bank'
        description='Massaa Online Bank | Deposit into your account'
      />
      <Dash />

      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Sidebar>
          <AppBar page='Deposit' />
          <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {/* <button
                type='button'
                className='w-full p-6 pb-16 rounded-3xl bg-secondary text-gray-50 relative'
                onClick={() => {
                  setOpen(true);
                  // setMethod('Crypto');
                }}
              >
                <p className='text-2xl font-extrabold'>Fund Via Crypto</p>
                <span className='absolute bottom-6 right-6 text-3xl'>
                  <SiHiveBlockchain />
                </span>
              </button> */}
              <button
                type='button'
                className='w-full p-6 pb-16 rounded-3xl bg-primary-dark text-gray-50 relative'
                onClick={() => {
                  cogoToast.success(
                    'Contact support for payment via local bank.'
                  );
                }}
              >
                <p className='text-2xl font-extrabold'>Fund Via Local Bank</p>
                <span className='absolute bottom-6 right-6 text-3xl'>
                  <BiSolidBank />
                </span>
              </button>
            </div>
          </Container>
          <Container>
            <Typography>DEPOSIT HISTORY</Typography>
            {(!userData?.deposits || userData?.deposits.length === 0) && (
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
            {userData?.deposits && userData?.deposits?.length > 0 && (
              <Transactions
                transactions={userData.deposits}
                currency={userData?.currency}
              />
            )}
          </Container>
        </Sidebar>
      </Box>

      <PopupModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        title='deposit into your account'
        sx={{ maxWidth: '768px' }}
      >
        <div className='text-gray-200'>
          {method.toLocaleLowerCase() !== 'bank' && (
            <>
              <p className='mb-4 text-sm'>
                Please send{' '}
                <span className='font-bold'>${+amount.toLocaleString()} </span>
                to the address below. The balance will appear in your account
                after it is confirmed by our team.
              </p>
              <p className='font-bold'>Scan the QR code or copy the address</p>
            </>
          )}

          <div className='mt-4'>
            {method.toLocaleLowerCase() !== 'bank' && (
              <div className='bg-gray-700 h-28 w-28 mx-auto rounded-md my-4 border border-gray-50'>
                <img
                  src={'qr_code'}
                  alt={' qr code'}
                  className='rounded-lg w-full h-full border object-contain'
                />
              </div>
            )}

            <div className='my-6'>
              <label
                htmlFor='method'
                className='font-semibold text-sm text-gray-100 mb-2'
              >
                Amount (USD)
                {/* Amount ({method.toUpperCase()}) */}
              </label>
              <input
                type='number'
                name='method'
                id='method'
                className='w-full px-4 py-2 outline-none rounded-md bg-gray-600 text-gray-300 text-sm'
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className=''>
              <p className='mb-4 text-sm'>
                Send Amount: ${+amount.toLocaleString()}{' '}
                <span className='font-bold text-base'>
                  ({(+amount / prices.btc).toLocaleString()} BTC)
                </span>
              </p>
              <div className='flex items-center justify-between border border-gray-400 bg-gray-600 p-3 rounded-md'>
                <p className='text-sm text-gray-300'>
                  {method.toLocaleLowerCase() === 'bank' ? bank : wallet}
                </p>

                <button
                  title='Copy button'
                  className='text-primary'
                  onClick={() => {
                    window.navigator.clipboard.writeText(wallet);
                    alert('Copied address');
                  }}
                >
                  <MdOutlineContentCopy className='text-lg' />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 flex justify-end'>
          <button
            type='button'
            className='btn bg-primary text-gray-100 hover:bg-secondary rounded-md py-3 px-12'
            onClick={createNewDeposit}
          >
            {isLoading ? 'Loading...' : 'I HAVE PAID'}
          </button>
        </div>
      </PopupModal>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Deposit;
