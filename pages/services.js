import React from 'react';
import { Footer, Meta, Layout, Navbar } from '../components';
import { Box } from '@mui/material';

const Services = () => {
  return (
    <>
      <Meta
        title='Services - Incrypto Finanace - Online crypto banking for everyone -
        Homepage'
        description='What services Incrypto Finance offers - Online crypto banking for everyone - Services page'
      />

      <Navbar />
      <Box pt={8}>
        <Layout>
          <h1>Our Services</h1>
        </Layout>
      </Box>
      <Footer />
    </>
  );
};

export default Services;
