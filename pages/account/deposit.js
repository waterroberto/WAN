import { Box, Stack, Typography, Button } from '@mui/material';
import React, { useContext } from 'react';
import { Dash, Meta, MobileNav, Sidebar } from '../../components';
import AppBar from '../../components/dashboard/AppBar';
import { MdArrowDropDown } from 'react-icons/md';
import { FaFolderOpen } from 'react-icons/fa';
import userDataContext from '../../context/UserDataContext';
import Transactions from '../../components/dashboard/Transactions';

const Deposit = () => {
  const { transactions, currency } = useContext(userDataContext);

  const deposits = transactions.filter(
    (transaction) => transaction.type.toLowerCase() === 'deposit'
  );

  return (
    <>
      <Meta
        title='Incrypto Finance - Deposit - Online Bank'
        description='Incrypto Financial Bank | Deposit into your account'
      />
      <Dash />

      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Sidebar>
          <AppBar page='Deposit' />
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
            <Typography>FUND YOUR ACCOUNT</Typography>
            <Stack
              mt={2}
              direction={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='flex-start'
              gap={2}
              width={{ xs: '100%', lg: '50%' }}
            >
              <Button
                variant='text'
                disableElevation
                endIcon={<MdArrowDropDown />}
                sx={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  background: 'var(--green)',
                  transition: '0.5s ease-in',

                  '&:hover': {
                    transition: '0.5s ease-out',
                    background: 'var(--green-hover)',
                  },
                  width: { xs: '100%', lg: '50%' },
                }}
              >
                Select Payment Method
              </Button>
              <Button
                variant='text'
                disableElevation
                sx={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  background: 'var(--green)',
                  transition: '0.5s ease-in',

                  '&:hover': {
                    transition: '0.5s ease-out',
                    background: 'var(--green-hover)',
                  },
                  width: { xs: '100%', lg: '50%' },
                }}
              >
                Upload Proof of Deposit
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
              <Transactions transactions={deposits} currency={currency} />
            )}
          </Box>
        </Sidebar>
      </Box>
      <MobileNav />
    </>
  );
};

export default Deposit;
