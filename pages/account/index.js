import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import React, { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import { MdOutlineAdd } from 'react-icons/md';
import { Dash, Layout, Meta, MobileNav, Sidebar } from '../../components';
import PrivateRoute from '../../components/auth/PrivateRoute';
import Container from '../../components/dashboard/Container';
import InvestCards from '../../components/dashboard/InvestCards';
import Transactions from '../../components/dashboard/Transactions';
import VerifyAccount from '../../components/dashboard/VerifyAccount';
import userDataContext from '../../context/UserDataContext';

const Dashboard = () => {
  const { userData } = useContext(userDataContext);

  const theme = useTheme();

  return (
    <PrivateRoute>
      <Meta
        title='WAN Cooperation Finance - Account - Online Bank'
        description='WAN Cooperation Financial Bank | Welcome to your account'
      />
      <Dash />

      <Box minHeight='100vh'>
        <Sidebar>
          <div className=' max-w-[1200px] py-1 pt-6 px-4 mx-auto relative'>
            {/* <Layout> */}
              <p className='text-gray-800 text-xl mg-4'>
                Welcome,{' '}
                <span className='text-primary font-extrabold'>
                  {userData?.firstName} {userData?.lastName}
                </span>
              </p>
              {userData?.accountLevel < 2 && <VerifyAccount />}
            {/* </Layout> */}
          </div>
          <Layout>
            <div className='p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-md  shadow-md'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-gray-600 text-sm mb-2'>
                    Available Balance
                  </p>
                  <p className='text-gray-800 font-bold text-3xl sm:text-4xl'>
                    {userData?.currency}
                    {(
                      userData?.depositBalance + userData?.incomeBalance
                    ).toLocaleString()}
                    .00
                  </p>
                </div>
                {/* <Link
                  href='/account/deposit'
                  className='text-gray-200 bg-secondary p-2 text-sm rounded-full px-4 flex items-center gap-2'
                >
                  <AiOutlinePlus /> Add Money
                </Link> */}
              </div>

              <div className='h-[2px] w-full bg-gray-200 my-4'></div>

              <div className='flex items-start gap-2'>
                <p className='text-gray-600 text-md mb-2'>Account Number: </p>
                <p className='text-secondary font-bold text-md'>
                  {userData?.accountNumber}
                </p>
              </div>
            </div>
            {/*  */}
            <div className='grid grid-cols-2 gap-1 ml-[20px] mr-[20px] md:ml-[50px] md:mr-[50px] -mt-5 sm:-mt-4 bg-gray-100 rounded-sm'>
              <Button
                variant='text'
                disableElevation
                startIcon={<MdOutlineAdd />}
                sx={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  background: theme.palette.primary.main,
                  padding: 1.5,
                  borderRadius: 1,

                  '&:hover': {
                    background: theme.palette.primary.dark,
                    color: "#fff",
                  },
                }}
              >
                <Link href='/account/deposit'>Add Funds</Link>
              </Button>
              {/* <div className=" w-[0.5px] h-full bg-gray-300"></div> */}
              <Button
                variant='text'
                disableElevation
                startIcon={<HiOutlineArrowTrendingUp />}
                sx={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  background: theme.palette.secondary.main,
                  padding: 1.5,
                  borderRadius: 1,

                  '&:hover': {
                    background: theme.palette.secondary.dark,
                    color: "#fff",
                  },
                }}
              >
                <Link href='/account/withdraw'>Bank Transfer</Link>
              </Button>
            </div>

            <div className='grid sm:grid-cols-2 gap-4 mt-8'>
              <div className='p-4 py-6 bg-white rounded-md shadow-md'>
                <p className='uppercase text-gray-500 text-sm mb-2 font-semibold'>
                  Deposit Balance
                </p>
                <p className='uppercase text-gray-800 text-3xl sm:text-4xl font-extrabold'>
                  {userData?.currency}
                  {userData?.depositBalance.toLocaleString()}.00
                </p>
              </div>
              <div className='p-4 py-6 bg-white rounded-md shadow-md'>
                <p className='uppercase text-gray-500 text-sm mb-2 font-semibold'>
                  Income Balance
                </p>
                <p className='uppercase text-gray-800 text-3xl sm:text-4xl font-extrabold'>
                  {userData?.currency}
                  {userData?.incomeBalance.toLocaleString()}.00
                </p>
              </div>
            </div>
            {/*  */}
            <InvestCards />
            {/*  */}

            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              mt={4}
            >
              <Typography
                sx={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  p: 1,
                  color: 'var(--dark)',
                }}
              >
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
          </Layout>
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Dashboard;
