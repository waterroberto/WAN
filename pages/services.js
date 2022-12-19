import React from 'react';
import {
  Footer,
  Meta,
  Layout,
  Navbar,
  GetStarted,
  FeatureCards,
  FAQs,
} from '../components';
import { Box, Typography, Stack } from '@mui/material';

const Services = () => {
  return (
    <>
      <Meta
        title='Services - Incrypto Finanace - Online decentralized banking for everyone -
        Homepage'
        description='What services Incrypto Finance offers - Online decentralized banking for everyone - Services page'
      />

      <Navbar />
      <Box
        pt={10}
        pb={14}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background:
            'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") no-repeat center center/cover',

          '&:after': {
            content: "''",
            position: 'absolute',
            background: 'rgba(0, 0, 0, 0.8)',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          },
          '& *': {
            zIndex: 2,
          },
        }}
        width='100%'
      >
        <Layout>
          <Stack
            direction='column'
            spacing={2}
            alignItems='center'
            justifyContent='center'
            width='100%'
          >
            <Typography
              component='h2'
              color='#fff'
              sx={{
                fontSize: {
                  xs: '1.8rem',
                  sm: '2rem',
                  md: '2.5rem',
                },
                fontWeight: 700,
                fontFamily: 'inherit',
              }}
            >
              SERVICES
            </Typography>
            <Typography
              component='h2'
              color='#fff'
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 300,
                fontFamily: 'inherit',
              }}
            >
              Incrypto Financial Bank is a chartered bank in the United States
              that allows you to buy, sell, and hold decentralized assets
              directly with your bank account. We give Loans & Grants and also
              incoporate Decentralized Spending, We facilitate Investments and
              also enable users Spend Wisely. <br />
              We allow investors have a flexible yet comprehensive way of
              investing in the decentralized market at a low-cost, giving them a
              chance to expand their investment portfolio. <br /> Incrypto
              Finance offers both investing, banking, loans & savings services.{' '}
              <br /> Our platform is easy to use, get started in a few simple
              steps.
            </Typography>
          </Stack>
        </Layout>
      </Box>
      <FeatureCards showLinks={false} />
      <FAQs />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Services;
