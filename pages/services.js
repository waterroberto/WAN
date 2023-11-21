import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import {
  DeExchange,
  FAQs,
  FeatureCards,
  Footer,
  GetStarted,
  Investments,
  Layout,
  Meta,
  Navbar,
  QuickLoans,
  SafeSpending,
} from '../components';

const Services = () => {
  return (
    <>
      <Meta
        title='Services - Massaa Bank - Online loan banking for everyone'
        description='What services Massaa Bank offers - Online loan banking for everyone'
      />

      <Navbar />
      <Box
        pt={10}
        pb={14}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background:
            'url("https://firebasestorage.googleapis.com/v0/b/west-financial-services.appspot.com/o/agric-loan.jpg?alt=media&token=1987e002-d8fd-4cb3-b2ad-17c29c04e6e8") no-repeat center center/cover',

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
              Blue Chip Financial Bank is a chartered bank in Europe that allows
              you to buy, sell, and hold assets directly with your bank account.
              We give Loans & Grants and also incoporate Decentralized Spending,
              We facilitate Investments and enable users Spend Wisely. <br />
              We allow investors have a flexible way of investing in market at a
              low-cost, and bridge the gap between loan applicant`s and
              corporate organisations, giving them a chance to expand their
              investment portfolio. <br /> Blue Chip Finance offers banking,
              loans & savings services. <br /> Our platform is easy to use, get
              started in a few simple steps.
            </Typography>
          </Stack>
        </Layout>
      </Box>
      <FeatureCards showLinks={false} />
      <>
        <QuickLoans />
        <DeExchange />
        <Investments />
        <SafeSpending />
      </>
      <FAQs />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Services;
