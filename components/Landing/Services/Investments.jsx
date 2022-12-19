import React from 'react';
import { ArrowForwardRounded } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import Layout from '../../Layout/Layout';

const Investments = () => {
  return (
    <Grid
      container
      columns={12}
      sx={{
        background: '#fff',
      }}
      id='investments'
    >
      <Grid item xs={12} sm={12} md={6} width='100%'>
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
            Investments
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
            Dollar Mutual Funds, Forex Money, Capital Market Investments, Tesla
            Stocks, Crypto, you name it. We have a list of rewarding investments
            you can choose from. We have plans suitable for both Conservative
            and Aggressive investors. We focus on stability and protection from
            market fluctuations, and so provide Investment options with a low
            risk tolerance.
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
            Start Investing
          </Button>
        </Layout>
      </Grid>
      <Grid item xs={12} sm={12} md={6} width='100%'>
        <Layout>
          <Box
            sx={{
              height: '400px',
              width: '100%',
              background:
                'url("https://images.unsplash.com/photo-1423666523292-b458da343f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80") no-repeat center center/cover',
            }}
          ></Box>
        </Layout>
      </Grid>
    </Grid>
  );
};

export default Investments;
