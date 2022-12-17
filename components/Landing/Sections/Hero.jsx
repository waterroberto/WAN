import { Typography, Box, Grid, Button, Stack, styled } from '@mui/material';
import React from 'react';
import { Layout } from '../../';
import { ArrowForwardRounded } from '@mui/icons-material';

const Blur = styled('div')(({ theme }) => ({
  background: '#1b4cd1',
  filter: 'blur(100px)',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  position: 'absolute',
  bottom: '-200px',
  left: '-200px',
}));

const Hero = () => {
  return (
    <Box
      minHeight='100vh'
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'url("https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80") no-repeat center center/cover',

        '&:after': {
          content: "''",
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.7)',
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
      <Grid container columns={12}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Layout>
            <Typography
              component='h1'
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: '2.5rem',
                  sm: '4rem',
                  lg: '4.5rem',
                },
                color: '#fff',
              }}
            >
              <Typography
                component='span'
                color='primary'
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: '2.5rem',
                    sm: '4rem',
                    lg: '4.5rem',
                  },
                }}
              >
                Crypto Banking{' '}
              </Typography>
              Institution
            </Typography>
            <Typography
              component='h2'
              color='#fff'
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 300,
                fontFamily: 'inherit',
              }}
            >
              Our loans provide you with financing needed to fund your personal
              & business needs, while assuring you the financial freedom and
              security you are looking for.
            </Typography>
            <Stack
              direction='row'
              spacing={2}
              mt={4}
              alignItems='center'
              justifyContent='flex-start'
              width='100%'
            >
              <Button
                variant='contained'
                href='/register'
                disableElevation
                endIcon={<ArrowForwardRounded />}
                sx={{
                  borderRadius: '2rem',
                  padding: '1rem 2rem',
                  color: '#fff',
                  background: 'primary.main',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  '&:hover': {
                    background: '#1b4cd1',
                  },
                }}
              >
                Join Us
              </Button>
              <Button
                variant='outlined'
                href='/login'
                disableElevation
                endIcon={<ArrowForwardRounded />}
                sx={{
                  borderRadius: '2rem',
                  padding: '1rem 2rem',
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                }}
              >
                Login
              </Button>
            </Stack>
          </Layout>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            width: '500px',
            height: '500px',
            transform: 'rotate(-45deg) translateY(35%) translateX(15%)',
            background:
              'url("https://images.unsplash.com/photo-1647462659318-1e9702f92b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80") no-repeat center center/cover',
            opacity: 0.8,
          }}
        ></Grid>
      </Grid>
      <Blur />
    </Box>
  );
};

export default Hero;
