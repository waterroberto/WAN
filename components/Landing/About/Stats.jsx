import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Layout } from '../../';
import Image from 'next/image';
import globe from '../../../assets/globe.png';

const Stats = () => {
  return (
    <Box
      sx={{
        background: '#fff',
      }}
    >
      <Grid container columns={12}>
        <Grid item xs={12} sm={12} md={6} width='100%' data-aos='fade-down'>
          <Layout>
            <Image
              src={globe}
              alt='People smiling and happy'
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '400px',
                maxHeight: '500px',
                filter: 'hue-rotate(10deg)',
                display: 'block',
                margin: 'auto',
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
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', xl: '4rem' },
              }}
              data-aos='fade-up'
            >
              Available in 112 Countries
            </Typography>
            <Typography
              sx={{
                fontFamily: 'inherit',
                fontWeight: 300,
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
              }}
              data-aos='fade-up'
            >
              Investors from all over the world trust us. Incrypto Financial
              Bank is trusted by your favourite firms. We love to serve and we
              are available in over 112 countries. <br /> We let you choose the
              most convenient way to Apply, Save, Invest, and hop out.
            </Typography>
          </Layout>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stats;
