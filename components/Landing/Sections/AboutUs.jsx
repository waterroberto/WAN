import React from 'react';
import { ArrowForwardRounded } from '@mui/icons-material';
import { Button, Grid, Typography, Box } from '@mui/material';
import Layout from '../../Layout/Layout';
import incfSvg from '../../../assets/incf.svg';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <Grid
      container
      columns={12}
      sx={{
        background: '#060606',
      }}
    >
      <Grid item xs={12} sm={12} md={6} width='100%'>
        <Layout>
          <Image
            src={incfSvg}
            alt='About Incrypto Finance. Wallet balance svg'
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '700px',
              maxHeight: '700px',
            }}
          />
        </Layout>
      </Grid>
      <Grid item xs={12} sm={12} md={6} width='100%'>
        <Layout>
          <Typography
            mb={2}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 700,
              color: '#fff',
              fontSize: {
                xs: '1.8rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '3rem',
              },
            }}
          >
            Who we are. What we do.
          </Typography>
          <Typography
            mb={4}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 300,
              color: '#fff',
              fontSize: {
                xs: '1.1rem',
                sm: '1.1rem',
                md: '1.2rem',
              },
            }}
          >
            We give
            <span className='em'> Loans & Grants</span>. Our platform is easy to
            use and enhances Decentralized Spending, We facilitate Investments
            and also enable users Spend Wisely.
            <br /> <br />
            The banking and decentralized assets sectors continue to intersect
            and decentralized assets banks are maturing fast, decentralized
            assets is giving rise to a new hierarchy of money within banking
            systems. We manage digital currency. Unlike traditional banks, which
            only hold fiat currency and traditional financial assets, we also
            hold and decentralized assets..
          </Typography>
          <Button
            variant='contained'
            href='/register'
            disableElevation
            endIcon={<ArrowForwardRounded />}
            sx={{
              borderRadius: '2rem',
              color: '#fff',
              padding: '1rem 2rem',
              textTransform: 'capitalize',
              fontSize: '1rem',
              fontWeight: 600,
              fontFamily: 'inherit',
            }}
          >
            Open Account
          </Button>
        </Layout>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
