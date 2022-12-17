import React from 'react';
import { Footer, Meta, Layout, Navbar } from '../components';
import { Box } from '@mui/material';

const Login = () => {
  return (
    <>
      <Meta
        title='Login - Incrypto Finanace - Online crypto banking for everyone -
        Homepage'
        description='Login to your Incrypto Account - Online crypto banking for everyone - Login page'
      />
      <Box mt={8}>
        <Navbar />
        <h1>Login Page</h1>
        <Footer />
      </Box>
    </>
  );
};

export default Login;
