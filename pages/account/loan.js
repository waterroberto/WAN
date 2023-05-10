import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { MobileNav, Meta, Dash, Sidebar, Heading } from '../../components';
import AppBar from '../../components/dashboard/AppBar';
import CryptoMarquee from '../../components/dashboard/CryptoMarquee';
import InvestCards from '../../components/dashboard/InvestCards';

const Loan = () => {
  return (
    <>
      <Meta
        title='Incrypto Finance - Loan - Online Bank'
        description='Incrypto Financial Bank | Loan into your account'
      />
      <Dash />

      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Sidebar>
          <AppBar page='Loan' />
        </Sidebar>
      </Box>
      <MobileNav />
    </>
  );
};

export default Loan;
