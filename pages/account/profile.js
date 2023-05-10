import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { MobileNav, Meta, Dash, Sidebar, Heading } from '../../components';
import AppBar from '../../components/dashboard/AppBar';
import CryptoMarquee from '../../components/dashboard/CryptoMarquee';
import InvestCards from '../../components/dashboard/InvestCards';

const Profile = () => {
  return (
    <>
      <Meta
        title='Incrypto Finance - Profile - Online Bank'
        description='Incrypto Financial Bank | Profile into your account'
      />
      <Dash />

      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Sidebar>
          <AppBar page='Profile' />
        </Sidebar>
      </Box>
      <MobileNav />
    </>
  );
};

export default Profile;
