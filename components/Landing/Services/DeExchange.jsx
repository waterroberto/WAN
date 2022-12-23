import React from 'react';
import { ArrowForwardRounded } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import Layout from '../../Layout/Layout';

const DeExchange = () => {
  return (
    <Grid
      container
      columns={12}
      sx={{
        background: '#fff',
      }}
      id='decentralized-exchange'
    >
      <Grid item xs={12} sm={12} md={6} width='100%' data-aos='fade-up'>
        <Layout>
          <Typography
            mb={2}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 700,
              color: '#060606',
              fontSize: {
                xs: '2rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '3rem',
              },
              textTransform: 'uppercase',
            }}
          >
            Decentralized Exchange
          </Typography>
          <Typography
            mb={4}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 300,
              color: '#1b1b1b',
              fontSize: {
                xs: '1.1rem',
                sm: '1.1rem',
                md: '1.2rem',
              },
            }}
          >
            Decentralized exchanges rely on smart contracts to allow investors
            and clients to execute orders, exchange currency, and save without
            an intermediary. We are a regular bank aimed at making profit but we
            prioritize our customer`s safety and user experience. With this our
            feature, you are allowed to save your money in any money market,
            (EUR, USD, GBP, ZAR, INR), etc. You can save in any market and see
            your money increase as the currency rate rises.
          </Typography>
          <Button
            variant='contained'
            href='/register'
            disableElevation
            endIcon={<ArrowForwardRounded />}
            sx={{
              borderRadius: '0.25rem',
              color: '#fff',
              padding: '1rem 2rem',
              textTransform: 'capitalize',
              fontSize: '1rem',
              fontWeight: 600,
              fontFamily: 'inherit',
            }}
          >
            Get Started
          </Button>
        </Layout>
      </Grid>
      <Grid item xs={12} sm={12} md={6} width='100%' data-aos='fade-down'>
        <Layout>
          <Box
            sx={{
              height: '400px',
              width: '100%',
              background:
                'url("https://images.unsplash.com/photo-1591033594798-33227a05780d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80") no-repeat center center/cover',
            }}
          ></Box>
        </Layout>
      </Grid>
    </Grid>
  );
};

export default DeExchange;
