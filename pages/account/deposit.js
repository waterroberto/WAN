import { Box, Button, Stack, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import React, { useContext, useState } from 'react';
import { BiSolidBank } from 'react-icons/bi';
import { FaFolderOpen } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { SiHiveBlockchain } from 'react-icons/si';
import { Dash, Meta, MobileNav, Sidebar } from '../../components';
import PopupModal from '../../components/Global/Modal';
import PrivateRoute from '../../components/auth/PrivateRoute';
import AppBar from '../../components/dashboard/AppBar';
import Container from '../../components/dashboard/Container';
import Transactions from '../../components/dashboard/Transactions';
import userDataContext from '../../context/UserDataContext';

const Deposit = () => {
  const [open, setOpen] = useState(false);
  const { userData } = useContext(userDataContext);

  const deposits = userData?.transactions.filter(
    (transaction) => transaction.type.toLowerCase() === 'deposit'
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <button
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
              </button>
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
            {(!deposits || deposits.length === 0) && (
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
            {deposits && deposits.length > 0 && (
              <Transactions
                transactions={deposits}
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
      ></PopupModal>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Deposit;
