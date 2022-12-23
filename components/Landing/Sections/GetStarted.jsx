import { Typography, Box, Button, Stack } from '@mui/material';
import React from 'react';
import { Layout } from '../../';

const GetStarted = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") no-repeat center center/cover',

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
      data-aos='fade-up'
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
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
              fontWeight: 700,
              fontFamily: 'inherit',
            }}
          >
            GET STARTED NOW
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
            Create a personal/enterprise account and start banking in crypto.
          </Typography>
          <Button
            variant='contained'
            href='/register'
            disableElevation
            sx={{
              borderRadius: '0.25rem',
              padding: '1rem 3rem',
              color: '#fff',
              background: 'primary.main',
              textTransform: 'capitalize',
              fontWeight: 400,
              fontFamily: 'inherit',
              width: '100%',
              maxWidth: '400px',
              '&:hover': {
                background: '#1b4cd1',
              },
            }}
          >
            Open Account
          </Button>
        </Stack>
      </Layout>
    </Box>
  );
};

export default GetStarted;
