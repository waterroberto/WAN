import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Dash, Heading, Meta, MobileNav, Sidebar } from '../../components';
import PrivateRoute from '../../components/auth/PrivateRoute';
import AppBar from '../../components/dashboard/AppBar';
import CryptoMarquee from '../../components/dashboard/CryptoMarquee';
import InvestCards from '../../components/dashboard/InvestCards';
import ReferralCard from '../../components/dashboard/ReferralCard';
import Transactions from '../../components/dashboard/Transactions';
import userDataContext from '../../context/UserDataContext';

const Dashboard = () => {
  const { userData } = useContext(userDataContext);

  return (
    <PrivateRoute>
      <Meta
        title='Massaa Bank - Account - Online Bank'
        description='Massaa Online Financial Bank | Welcome to your account'
      />
      <Dash />

      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Sidebar>
          <AppBar page='Dashboard' />
          <Heading />
          {/* <CryptoMarquee /> */}
          <InvestCards />
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            mt={4}
          >
            <Typography sx={{ fontSize: '1.4rem', fontWeight: 700, p: 1 }}>
              Transactions
            </Typography>
            <Button variant='outlined' color='primary'>
              {/* {[...userData?.deposits, ...userData?.withdrawals].length} */}
            </Button>
          </Stack>
          {(userData?.deposits || userData?.withdrawals) && (
            <Transactions
              transactions={[...userData?.deposits, ...userData?.withdrawals]}
              // transactions={[]}
              currency={userData?.currency}
              customStyles={{ p: { xs: 2, sm: 3, md: 4 } }}
            />
          )}
          <ReferralCard />
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Dashboard;
