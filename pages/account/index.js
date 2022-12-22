import { Box, Typography } from '@mui/material';
import React from 'react';
import { MobileNav, Meta, Dash, Sidebar, Heading } from '../../components';

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
          <Typography
            variant='h5'
            mb={4}
            sx={{ color: 'var(--blue)', fontWeight: 700 }}
          >
            Dashboard
          </Typography>
          <Heading />
        </Sidebar>
      </Box>
      <MobileNav />
    </>
  );
};

export default Dashboard;
