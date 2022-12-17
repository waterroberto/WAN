import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Layout } from '../../';

const headingStyles = {
  fontFamily: 'inherit',
  fontWeight: 700,
  textAlign: 'center',
  fontSize: { xs: '1.5rem', sm: '1.8rem', lg: '2rem' },
  color: '#1b4cd1',
};

const subheadingStyles = {
  fontFamily: 'inherit',
  fontWeight: 500,
  color: '#fff',
  textAlign: 'center',
  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
};

const Statistics = () => {
  return (
    <Box
      sx={{
        background: '#060606',
      }}
    >
      <Layout>
        <Typography
          sx={{
            color: '#fff',
            fontFamily: 'inherit',
            fontWeight: 700,
            textAlign: 'center',
            fontSize: { xs: '2.5rem', sm: '3rem', xl: '4rem' },
          }}
        >
          Our Company`s Open Statistics
        </Typography>
        <Typography
          mt={1}
          mb={4}
          sx={{
            fontFamily: 'inherit',
            fontWeight: 300,
            color: '#fff',
            textAlign: 'center',
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
          }}
        >
          Trace us to our periodical milestones
        </Typography>
        <Grid
          container
          columns={12}
          mt={8}
          rowSpacing={{ xs: 4, sm: 4, lg: 0 }}
        >
          <Grid item xs={12} sm={6} lg={3} width='100%'>
            <Typography sx={headingStyles}>1,781,227</Typography>
            <Typography sx={subheadingStyles}>ACTIVE USERS</Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} width='100%'>
            <Typography sx={headingStyles}>$2,142,857</Typography>
            <Typography sx={subheadingStyles}>MONTHLY WITHDRAWALS</Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} width='100%'>
            <Typography sx={headingStyles}>$3,142,857</Typography>
            <Typography sx={subheadingStyles}>MONTHLY DEPOSITS</Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} width='100%'>
            <Typography sx={headingStyles}>$21,169,000</Typography>
            <Typography sx={subheadingStyles}>IN APPROVED LOANS</Typography>
          </Grid>
        </Grid>
      </Layout>
    </Box>
  );
};

export default Statistics;
