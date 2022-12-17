import React from 'react';
import { Layout, Range, Roadmap } from '../../..';
import { Box, Typography, Grid } from '@mui/material';

const LoanProcess = () => {
  return (
    <Box
      minHeight='100vh'
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'url("https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") no-repeat center center/cover',

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
      <Grid container columns={12} sx={{ alignItems: 'center' }}>
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
              We summarize our loan process into{' '}
              <Typography
                component='span'
                sx={{
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                }}
              >
                {' '}
                4 Easy Steps
              </Typography>
            </Typography>
            <Roadmap />
          </Layout>
        </Grid>
        <Grid item xs={12} sm={12} md={6} width='100%'>
          <Layout>
            <Range />
          </Layout>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanProcess;
