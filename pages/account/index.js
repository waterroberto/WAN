import { Box, Stack, Typography, Button } from '@mui/material';
import React, { useContext } from 'react';
import { MobileNav, Meta, Dash, Sidebar, Heading } from '../../components';
import AppBar from '../../components/dashboard/AppBar';
import CryptoMarquee from '../../components/dashboard/CryptoMarquee';
import InvestCards from '../../components/dashboard/InvestCards';
import ReferralCard from '../../components/dashboard/ReferralCard';
import Transactions from '../../components/dashboard/Transactions';
import userDataContext from '../../context/UserDataContext';

const Dashboard = () => {
  const { transactions, currency } = useContext(userDataContext);

  return (
    <>
      <Meta
        title='Incrypto Finance - Account - Online Bank'
        description='Incrypto Financial Bank | Welcome to your account'
      />
      <Dash />

      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Sidebar>
          <AppBar page='Dashboard' />
          <Heading />
          <CryptoMarquee />
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Typography sx={{ fontSize: '1.4rem', fontWeight: 700, p: 1 }}>
              Transactions
            </Typography>
            <Button variant='outlined' color='secondary'>
              {transactions.length}
            </Button>
          </Stack>
          <Transactions
            transactions={transactions}
            currency={currency}
            customStyles={{ p: { xs: 2, sm: 3, md: 4 } }}
          />
          <InvestCards />
          <ReferralCard />
        </Sidebar>
      </Box>
      <MobileNav />
    </>
  );
};

export default Dashboard;
