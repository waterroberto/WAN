import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Layout from '../Layout/Layout';
import partner1 from '../../assets/partner-1.png';
import partner2 from '../../assets/partner-2.png';
import partner3 from '../../assets/partner-3.png';
import partner4 from '../../assets/partner-4.png';
import partner5 from '../../assets/partner-5.png';
import partner6 from '../../assets/partner-6.png';

const IMAGES = [partner1, partner2, partner3, partner4, partner5, partner6];

const Partners = () => {
  return (
    <Box
      sx={{
        background: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Layout>
        <Typography
          mb={6}
          sx={{
            fontFamily: 'inherit',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
          }}
        >
          Our Partners
        </Typography>
        <Grid container columns={12} rowSpacing={4}>
          {IMAGES.map((image, index) => (
            <Grid
              key={`image-${index + 1}`}
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              width='100%'
              sx={{
                maxWidth: '200px',
              }}
            >
              <Image
                src={image}
                // width='100%'
                height={32}
                alt='Incrypto Finance sponsors'
              />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </Box>
  );
};

export default Partners;
