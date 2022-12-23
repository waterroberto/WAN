import React from 'react';
import { ArrowForwardRounded } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import Layout from '../../Layout/Layout';

const SafeSpending = () => {
  return (
    <Grid
      container
      columns={12}
      sx={{
        background: '#fff',
      }}
      id='safe-spending'
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
            Safe Spending
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
            Balance your bank account, manange expenses, budget periodically,
            spend and save safely with our Decentralized Banking (De-Banking) -
            We know it, you learn it. You can lock money away to avoid
            unecessary spending, through our various savings options. Prepare
            yourself and save ahead emergencies, life plans and other.
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
            Create Account
          </Button>
        </Layout>
      </Grid>
      <Grid item xs={12} sm={12} md={6} width='100%' data-aos='fade-up'>
        <Layout>
          <Box
            sx={{
              height: '400px',
              width: '100%',
              background:
                'url("https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80") no-repeat center center/cover',
            }}
          ></Box>
        </Layout>
      </Grid>
    </Grid>
  );
};

export default SafeSpending;
