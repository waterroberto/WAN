import React, { useState } from 'react';
import { Box, Grid, Typography, Slider, Stack } from '@mui/material';

const sliderStyles = {
  color: 'primary',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '4px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
};

export default function Range() {
  const [value, setValue] = useState(50);
  const [days, setDays] = useState(50);

  const handleSliderChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleSliderChange2 = (e, newValue) => {
    setDays(newValue);
  };

  return (
    <Box
      width='100%'
      bgcolor='#fff'
      p={4}
      sx={{ borderRadius: '0.5rem', position: 'relative' }}
    >
      <Typography
        sx={{
          fontFamily: 'inherit',
          fontWeight: 700,
          color: '#060606',
          fontSize: {
            xs: '1.1rem',
            sm: '1.4rem',
          },
        }}
      >
        How much money do you need?
      </Typography>
      <Typography
        sx={{
          color: 'primary.main',
          fontWeight: 700,
          fontSize: {
            xs: '1.5rem',
            sm: '1.5rem',
            md: '1.8rem',
            lg: '2rem',
          },
        }}
      >
        Calculate your loan.
      </Typography>
      <Box>
        <Grid container spacing={2} alignItems='center' mt={4}>
          <Grid item xs>
            <Slider
              value={typeof value === 'number' ? value : 1}
              onChange={handleSliderChange}
              aria-labelledby='input-slider'
              sx={sliderStyles}
            />
          </Grid>
        </Grid>

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography sx={{ fontWeight: 700, fontFamily: 'inherit' }}>
            R5000
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: 'inherit',
              color: 'primary.main',
            }}
          >
            R{value * 5000 === 0 ? 5000 : (value * 5000).toLocaleString()}
          </Typography>
          <Typography sx={{ fontWeight: 700, fontFamily: 'inherit' }}>
            R500,000
          </Typography>
        </Stack>
      </Box>
      {/*  */}
      <Box pb={{ xs: 24, sm: 14 }}>
        <Grid container spacing={2} alignItems='center' mt={2}>
          <Grid item xs>
            <Slider
              value={typeof days === 'number' ? days : 7}
              onChange={handleSliderChange2}
              aria-labelledby='input-slider'
              sx={sliderStyles}
            />
          </Grid>
        </Grid>

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography sx={{ fontWeight: 700, fontFamily: 'inherit' }}>
            7 Days
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: 'inherit',
              color: 'primary.main',
            }}
          >
            {days * 29.2 === 0 ? 7 : Math.floor(days * 29.2)} Days
          </Typography>
          <Typography sx={{ fontWeight: 700, fontFamily: 'inherit' }}>
            2920 Days
          </Typography>
        </Stack>
      </Box>

      <Grid
        container
        mx='auto'
        columns={12}
        sx={{
          position: 'absolute',
          borderRadius: '0 0 0.5rem 0.5rem',
          bottom: 0,
          left: 0,
          width: '100%',
          background: '#eee',
          p: 2,
        }}
      >
        <Grid px={2} py={1} item xs={6} sm={4} md={4} width='100%'>
          <Typography
            mb={1}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 300,
              textAlign: 'center',
            }}
          >
            You Get
          </Typography>
          <Typography
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 700,
              textAlign: 'center',
              fontSize: {
                xs: '1.5rem',
                sm: '1.5rem',
              },
            }}
          >
            R{value * 5000 === 0 ? 5000 : (value * 5000).toLocaleString()}
          </Typography>
        </Grid>
        <Grid px={2} py={1} item xs={6} sm={4} md={4} width='100%'>
          <Typography
            mb={1}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 300,
              textAlign: 'center',
            }}
          >
            Duration
          </Typography>
          <Typography
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 700,
              textAlign: 'center',
              fontSize: {
                xs: '1.5rem',
                sm: '1.5rem',
              },
            }}
          >
            {days * 29.2 === 0 ? 7 : Math.floor(days * 29.2)} Days
          </Typography>
        </Grid>
        <Grid px={2} py={1} item xs={6} sm={4} md={4} width='100%'>
          <Typography
            mb={1}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 300,
              textAlign: 'center',
            }}
          >
            You Pay Back
          </Typography>
          <Typography
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 700,
              textAlign: 'center',
              fontSize: {
                xs: '1.5rem',
                sm: '1.5rem',
              },
            }}
          >
            R
            {Math.floor(
              (value * 5000 === 0 ? 5000 : value * 5000) *
              0.15 *
              ((days * 29.2 === 0 ? 7 : days * 29.2) / 365) +
              (value * 5000 === 0 ? 5000 : value * 5000)
            ).toLocaleString()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
