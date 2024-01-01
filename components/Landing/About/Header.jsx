import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Layout } from '../../';
import aboutImageGroup from '../../../assets/breadcrumb-1.png';

const Header = () => {
  return (
    <Box
      pt={8}
      sx={{
        background:
          'linear-gradient(55deg, rgba(3,3,3,1) 0%, rgba(10,10,10,1) 55%, #010647 70%, rgba(15,15,15,1) 85%, rgba(10,10,10,1) 100%)',
      }}
    >
      <Grid container columns={12}>
        <Grid item xs={12} sm={12} md={6} width='100%'>
          <Layout>
            <Typography
              mb={2}
              sx={{
                color: '#fff',
                fontFamily: 'inherit',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', xl: '4rem' },
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontFamily: 'inherit',
                fontWeight: 300,
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
              }}
            >
              Capital Trust Finance is one of the world`s leading investment
              firms & mobile banking establishment.
              <br /> We provide quality financial consultation services, offer
              soft money loans, and empowerment grants, while facilitating safe
              spending and international transactions. We are an international
              business working with the goal of helping build small businesses
              and private infrastructure.
            </Typography>
          </Layout>
        </Grid>
        <Grid item xs={12} sm={12} md={6} width='100%'>
          <Layout></Layout>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
