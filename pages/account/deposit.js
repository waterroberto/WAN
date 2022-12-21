import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Layout, Meta, Dash, Sidebar } from '../../components';

const Deposit = () => {
  return (
    <>
      <Meta
        title='Incrypto Finance - Account | Deposit - Online crypto banking for everyone -
        Homepage'
        description='Incrypto Financial Bank | Welcome to your account'
      />
      <Dash />
      <Box minHeight='100vh'>
        <Sidebar>
          <Typography variant='h4'>Deposit</Typography>
        </Sidebar>
      </Box>
    </>
  );
};

export default Deposit;
