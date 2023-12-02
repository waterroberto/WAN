import React from 'react';
import { Stack, Typography, Grid, Box, Button } from '@mui/material';
import Layout from '../../Layout/Layout';
import { featuresData } from '../../../static/Data';
import { ArrowForwardRounded } from '@mui/icons-material';

const FeatureCards = ({ showLinks }) => {
  return (
    // <Layout>
      <Grid
        container
        mx='auto'
        // maxWidth='1200px'
        spacing={5}
        width={'100%'}
        mt={10}
        mb={10}
        sx={{
          zIndex: 5,
          position: 'relative',
          background: '#fff',
          borderRadius: '0.25rem',
          padding: '10px 10px',
          gap: '10px',
          justifyContent: "center",

        }}
        data-aos='fade-left'
      >
        {featuresData.map((feature, index) => (
          <Grid
            key={`${index + 1}-${feature.heading}`}
            item
            py={2}
            px={4}
            xs={12}
            sm={12}
            md={5}
            lg={3.5}
            // m={1}
            sx={{
              padding: '10px 10px',
              position: 'relative',
              overflow: 'hidden',
              background: '#fff',
              gap: '5px',
              cursor: 'pointer',
              borderRadius: '5px',
              width: {
                xs: "100%",
                md: "50%",
                lg: '30.333%',
              },
            boxShadow: '1px 1px 32px rgb(0, 0, 0, 0.1)',
            transition: '.4s',
            zIndex: 1,
            '&:after': {
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: 0,
                  borderRadius: '5px',
                  content: "''",
                  zIndex: -1,
                  backgroundColor: '#00a9a4',
                  transition: '.4s',
            },
            '&:hover::after' : {
              height: "100%",

            },
            }}
          >
            <Box sx={{ 
              color: 'primary.main', 
              fontSize: '4rem', 
              display: 'flex',
              alignItems: "center",
              }} p={1}>
                <Box sx={{
                  width: '65px',
                  height: '65px',
                  // border:'1px solid rgba(0,169,164,.6)',
                  // borderRadius: '7px',
                  position: 'relative',
                }}>
                  {feature.icon}
                </Box>
              <Typography
                mb={2}
                ml={3}
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
            </Box>
            <Typography
              mb={2}
              mt={2}
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
    // </Layout>
  );
};

export default FeatureCards;
