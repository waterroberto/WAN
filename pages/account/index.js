import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { MobileNav, Meta, Dash, Sidebar, Heading } from '../../components';
import AppBar from '../../components/dashboard/AppBar';
import CryptoMarquee from '../../components/dashboard/CryptoMarquee';
import InvestCards from '../../components/dashboard/InvestCards';
import ReferralCard from '../../components/dashboard/ReferralCard';
import Transactions from '../../components/dashboard/Transactions';

const Dashboard = () => {
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
          <Transactions />
          <InvestCards />
          <ReferralCard />
        </Sidebar>
      </Box>
      <MobileNav />
    </>
  );
};

export default Dashboard;
