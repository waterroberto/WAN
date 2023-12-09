import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import React, { useContext } from 'react';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import { MdOutlineAdd } from 'react-icons/md';
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

  const theme = useTheme();

  return (
    <PrivateRoute>
      <Meta
        title='Ravdak Finance - Account - Online Bank'
        description='Ravdak Financial Bank | Welcome to your account'
      />
      <Dash />

      <Box minHeight='100vh' sx={{ background: '#f5f5f5' }}>
        <Sidebar>
          <AppBar page='Dashboard' />
          <Heading />

          {/*  */}
          <div className='grid grid-cols-2 gap-4 my-4'>
            <Button
              variant='text'
              disableElevation
              startIcon={<HiOutlineArrowTrendingUp />}
              sx={{
                color: '#fff',
                textTransform: 'capitalize',
                fontFamily: 'inherit',
                borderRadius: 3,
                padding: 2,
                background: theme.palette.secondary.main,

                '&:hover': {
                  background: theme.palette.secondary.dark,
                },
              }}
            >
              <Link href='/account/withdraw'>Bank Transfer</Link>
            </Button>
            <Button
              variant='text'
              disableElevation
              startIcon={<MdOutlineAdd />}
              sx={{
                color: '#fff',
                textTransform: 'capitalize',
                fontFamily: 'inherit',
                borderRadius: 3,
                padding: 2,
                background: theme.palette.primary.dark,

                '&:hover': {
                  background: theme.palette.primary.main,
                },
              }}
            >
              <Link href='/account/deposit'>Add Funds</Link>
            </Button>
          </div>
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
          </Stack>
          {(userData?.deposits || userData?.withdrawals) && (
            <Transactions
              transactions={[...userData?.deposits, ...userData?.withdrawals]}
              // transactions={[]}
              currency={userData?.currency}
              customStyles={{ p: { xs: 2, sm: 3, md: 4 } }}
            />
          )}
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Dashboard;
