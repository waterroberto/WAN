import React from 'react';
import { Footer, Meta, Layout, Navbar } from '../components';
import { Box } from '@mui/material';

const Register = () => {
  return (
    <>
      <Meta
        title='Register - Incrypto Finanace - Online crypto banking for everyone -
        Homepage'
        description='Get Stated with Incrypto Finance - Online crypto banking for everyone - Registeration page'
      />

      <Navbar />
      <Box pt={8}>
        <Layout>
          <h1>Get Started- Register</h1>
        </Layout>
      </Box>
      <Footer />
    </>
  );
};

export default Register;
