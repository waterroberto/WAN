import { Box, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import Layout from '../Layout/Layout';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 100%;
  font-size: 0.9rem;
  font-family: 'inherit'
  font-weight: 300;
  line-height: 1.5;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #ccc;
  background: #1b1b1b;
  border: 1px solid #333;
  outline: none;

  &:hover {
    border-color: #1b4cd1;
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      type='email'
      slots={{ input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

function UnstyledInputIntroduction() {
  return (
    <CustomInput
      aria-label='Newsletter email field'
      placeholder='Your email address...'
    />
  );
}

const NewsLetter = () => {
  return (
    <Box sx={{ background: '#060606' }}>
      <Layout>
        <Grid
          container
          columns={12}
          rowSpacing={{ xs: 2, sm: 2 }}
          sx={{
            background: '#060606',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} sm={12} md={6} mb={2} width='100%'>
            <Typography
              sx={{
                color: '#fff',
                fontSize: '1.3rem',
                fontWeight: 400,
                fontFamily: 'inherit',
              }}
            >
              Be the first to get our updates.
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontSize: '2rem',
                fontWeight: 700,
                fontFamily: 'inherit',
              }}
            >
              Subscribe to our newsletter
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} width='100%'>
            <UnstyledInputIntroduction />
            <Button
              variant='contained'
              disableElevation
              sx={{
                borderRadius: '0.25rem',
                color: '#fff',
                padding: '0.8rem',
                textTransform: 'capitalize',
                fontSize: '1rem',
                fontWeight: 300,
                fontFamily: 'inherit',
                width: '100%',
                mt: 2,
                '&:hover': {
                  background: '#1b4cd1',
                },
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Layout>
    </Box>
  );
};

export default NewsLetter;
