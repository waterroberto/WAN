import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Layout, Meta } from '../../components';
import AdminMobileNav from '../../components/admin/AdminMobileNav';
import LoginDetails from '../../components/admin/Home/LoginDetails';
import StatCards from '../../components/admin/Home/StatCards/StatCards';
import Users from '../../components/admin/Home/Users/Users';
import LoansTable from '../../components/admin/Loans/LoansTable';
import Nav from '../../components/admin/Nav';
import AdminRoute from '../../components/auth/AdminRoute';

const Admin = () => {
  return (
    <AdminRoute>
      <Meta title='Admin Portal' description='Admin Portal' />
      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Nav />
        <Layout>
          <Box mt={8} sx={{ color: '#f5f5f5' }}>
            <Typography fontSize={24} fontWeight={500} mb={4}>
              Home
            </Typography>

            <StatCards />
            <Link
              href='/admin/register'
              className='block my-4 p-4 bg-primary rounded-md max-w-sm text-center'
            >
              CREATE NEW USER
            </Link>
            <Users />
            <LoansTable />

            <LoginDetails />
          </Box>
        </Layout>
      </Box>
      <AdminMobileNav />
    </AdminRoute>
  );
};

export default Admin;
