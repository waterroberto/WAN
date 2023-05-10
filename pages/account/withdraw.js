import { Box, Stack, Typography, Button } from '@mui/material';
import Transactions from '../../components/dashboard/Transactions';
import { FaFolderOpen } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import React, { useContext } from 'react';
import { MobileNav, Meta, Dash, Sidebar, Heading } from '../../components';
import AppBar from '../../components/dashboard/AppBar';
import userDataContext from '../../context/UserDataContext';

const Withdraw = () => {
  const { transactions, currency } = useContext(userDataContext);

  const withdrawals = transactions.filter(
    (transaction) => transaction.type.toLowerCase() === 'withdraw'
  );

  return (
    <>
      <Meta
        title='Incrypto Finance - Withdraw - Online Bank'
        description='Incrypto Financial Bank | Withdraw into your account'
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
              background: 'var(--dark)',
              borderRadius: 1,
              border: '1px solid #333',
              mb: 4,
              p: { xs: 2, sm: 4 },
            }}
          >
            <Typography>WITHDRAWAL & TRANSFER</Typography>
            <Stack
              mt={2}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems='center'
              justifyContent='flex-start'
              gap={2}
              width={{ xs: '100%', lg: '50%' }}
            >
              <Button
                variant='text'
                disableElevation
                sx={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  background: 'var(--light-blue)',
                  transition: '0.5s ease-in',

                  '&:hover': {
                    transition: '0.5s ease-out',
                    background: 'var(--blue)',
                  },
                  width: { xs: '100%', lg: '50%' },
                }}
              >
                International Transfer
              </Button>
              <Button
                variant='text'
                disableElevation
                sx={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  background: 'var(--light-blue)',
                  transition: '0.5s ease-in',

                  '&:hover': {
                    transition: '0.5s ease-out',
                    background: 'var(--blue)',
                  },
                  width: { xs: '100%', lg: '50%' },
                }}
              >
                Domestic Transfer
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: '1024px',
              margin: 'auto',
              p: { xs: 2, sm: 4 },
              background: 'var(--dark)',
              borderRadius: 1,
              border: '1px solid #333',
            }}
          >
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
              <Transactions transactions={withdrawals} currency={currency} />
            )}
          </Box>
        </Sidebar>
      </Box>
      <MobileNav />
    </>
  );
};

export default Withdraw;
