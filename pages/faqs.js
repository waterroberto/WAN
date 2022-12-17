import React from 'react';
import { Footer, Meta, Layout, Navbar } from '../components';
import { Box } from '@mui/material';

const FAQS = () => {
  return (
    <div>
      <Meta
        title='FAQs - Incrypto Finanace - Online crypto banking for everyone -
        Homepage'
        description='Frequently Asked Questions -  Incrypto Finance - Online crypto banking for everyone - Contact page'
      />

      <Navbar />
      <Box pt={8}>
        <Layout>
          <h1>FQAs Page</h1>
        </Layout>
      </Box>
      <Footer />
    </div>
  );
};

export default FAQS;
