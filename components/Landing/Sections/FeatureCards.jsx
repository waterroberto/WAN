import React from 'react';
import { Stack, Typography, Grid, Box, Button } from '@mui/material';
import Layout from '../../Layout/Layout';
import { featuresData } from '../../../static/Data';
import { ArrowForwardRounded } from '@mui/icons-material';

const FeatureCards = ({ showLinks }) => {
  return (
    <Layout>
      <Grid
        container
        mx='auto'
        maxWidth='1200px'
        columns={12}
        mt='-10rem'
        sx={{
          zIndex: 5,
          position: 'relative',
          background: '#fff',
          boxShadow: '1px 1px 32px rgb(0, 0, 0, 0.1)',
          borderRadius: '0.25rem',
        }}
      >
        {featuresData.map((feature, index) => (
          <Grid
            key={`${index + 1}-${feature.heading}`}
            item
            py={2}
            px={4}
            xs={12}
            sm={6}
            md={6}
            lg={3}
            width='100%'
            sx={{
              borderRight: index !== 3 && {
                xs: 0,
                sm: 0,
                md: '1px solid rgb(0, 0, 0, 0.2)',
              },
              borderBottom: index !== 3 && {
                xs: '1px solid rgb(0, 0, 0, 0.2)',
                sm: '1px solid rgb(0, 0, 0, 0.2)',
                md: 0,
              },
            }}
          >
            <Box sx={{ color: 'primary.main', fontSize: '4rem' }} p={1}>
              {feature.icon}
            </Box>
            <Typography
              mb={2}
              sx={{
                fontFamily: 'inherit',
                color: 'secondary.dark',
                fontWeight: 700,
                fontSize: {
                  xs: '1.4rem',
                  sm: '1.4rem',
                  md: '1.5rem',
                  lg: '1.75rem',
                },
              }}
            >
              {feature.heading}
            </Typography>
            <Typography
              mb={4}
              sx={{
                fontFamily: 'inherit',
                color: 'secondary.dark',
                fontWeight: 300,
              }}
            >
              {feature.body}
            </Typography>
            {showLinks && (
              <Button
                variant='text'
                href={`/${feature.page}`}
                disableElevation
                endIcon={<ArrowForwardRounded />}
                sx={{
                  borderRadius: '2rem',
                  color: 'primary',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                }}
              >
                Learn More
              </Button>
            )}
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default FeatureCards;
