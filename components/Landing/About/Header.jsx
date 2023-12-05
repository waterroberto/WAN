import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Layout } from '../../';
import aboutImageGroup from '../../../assets/breadcrumb-1.png';

const Header = () => {
  return (
    <Box
      pt={20}
      sx={{
        background:
          'linear-gradient(55deg, rgba(3,3,3,1) 0%, rgba(27,27,27,1) 55%, #006341 70%, rgba(27,34,52,1) 85%, rgba(9,9,9,1) 100%)',
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
              Who we are. What we do.
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontFamily: 'inherit',
                fontWeight: 300,
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
              }}
            >
              Ravdak Finance is one of the world`s leading investment firms &
              decentralized banking establishment. We aim to revolutionise the
              way people bank, save, invest, and enhance investors financial
              education.
              <br /> Over the years, we set milestones for ourselves and we have
              managed to accomplish most of it. <br /> We provide quality
              financial consultation services, offer soft money loans with small
              interest rates, and empowerment grants. We are an international
              business working with the goal of helping build small businesses
              and private infrastructure. <br /> Below are our public stats of
              realtime data.
            </Typography>
          </Layout>
        </Grid>
        <Grid item xs={12} sm={12} md={6} width='100%'>
          <Layout>
            {/* <Image
              src={aboutImageGroup}
              alt='People smiling and happy'
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '700px',
                maxHeight: '700px',
                filter: 'hue-rotate(10deg)',
              }}
            /> */}
          </Layout>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
