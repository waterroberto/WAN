import { Box, Button, Stack, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import React, { useContext, useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { Dash, Meta, MobileNav, Sidebar } from '../../components';
import PopupModal from '../../components/Global/Modal';
import PrivateRoute from '../../components/auth/PrivateRoute';
import AppBar from '../../components/dashboard/AppBar';
import Container from '../../components/dashboard/Container';
import Transactions from '../../components/dashboard/Transactions';
import userDataContext from '../../context/UserDataContext';
import { UserService } from '../../services/user';

const Withdraw = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [asset, setAsset] = useState('depositBalance');
  const [amount, setAmount] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const { userData } = useContext(userDataContext);

  const withdrawals = userData?.withdrawals;

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const validateFormInputs = () => {
    return (
      bankName.trim().length > 0 &&
      accountNumber.trim().length > 0 &&
      asset.trim().length > 0 &&
      +amount > 0
    );
  };

  const placeWithdrawal = async () => {
    if (validateFormInputs()) {
      if (!(+amount > userData[asset])) {
        const data = {
          status: 'pending',
          type: 'withdraw',
          amount: +amount,
          method: '',
          asset,
          date: new Date(),
          bankName,
          accountNumber,
          accountHolder,
        };

        setIsLoading(true);
        try {
          const res = await UserService.sendWithdrawalRequest(
            userData.id,
            data
          );

          console.log(res);

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

          setModalOpen(false);
          setIsLoading(false);

          cogoToast.success(
            'Withdrawal placed. Contact admin for more information'
          );
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
        title='Ravdak Finance - Withdraw - Online'
        description='Ravdak Financial Bank | Withdraw into your account'
      />
      <Dash />

      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Sidebar>
          <AppBar page='Withdraw' />
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
            <Typography>WITHDRAWAL HISTORY</Typography>
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
              Deposit Balance ( £{userData?.depositBalance.toLocaleString()})
            </option>
            <option value='incomeBalance'>
              Income Balance ( £{userData?.incomeBalance.toLocaleString()})
            </option>
          </select>
        </div>
        {/*  */}
        <div className='my-6'>
          <label htmlFor='accountNumber' className='text-sm text-gray-300 mb-2'>
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
