import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import Layout from '../../Layout/Layout';
import { contactInformation } from '../../../static/Data';

const ContactInformation = () => {
  return (
    <Layout>
      <Typography
        sx={{
          fontSize: '2rem',
          color: 'secondary.dark',
          fontFamily: 'inherit',
          fontWeight: 700,
          mb: 1,
          textAlign: 'center',
        }}
      >
        Contact Us
      </Typography>
      <Box
        sx={{
          width: '200px',
          height: '4px',
          background: '#1b4cd1',
          mx: 'auto',
          mb: 4,
        }}
      ></Box>
      <Grid container maxWidth='1280px' mx='auto' columns={12}>
        {contactInformation.map((feature, index) => (
          <Grid
            key={`${index + 1}-${feature.body}`}
            item
            py={8}
            px={2}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            my={{ xs: '2px', sm: '2px' }}
            mx='auto'
            sx={{
              background: '#f4f4f4',
              textAlign: 'center',
              outline: '4px solid #fff',
            }}
          >
            <Box sx={{ color: 'primary.main', fontSize: '4.5rem' }} p={1}>
              {feature.icon}
            </Box>
            <Typography
              sx={{
                fontSize: '1.25rem',
                fontFamily: 'inherit',
                color: 'secondary.dark',
                fontWeight: 700,
              }}
            >
              {feature.body}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default ContactInformation;
