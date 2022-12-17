import React from 'react';
import { Footer, Meta, Layout, Navbar } from '../components';
import { Box } from '@mui/material';

const Contact = () => {
  return (
    <>
      <Meta
        title='Contact us - Incrypto Finanace - Online crypto banking for everyone -
        Homepage'
        description='Contact Incrypto Finance - Online crypto banking for everyone - Contact page'
      />

      <Navbar />
      <Box pt={8}>
        <Layout>
          <h1>Contact Page</h1>
        </Layout>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
