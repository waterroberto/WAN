import React from 'react';
import Script from 'next/script';
import { Box } from '@mui/material';

const CryptoMarquee = () => {
  return (
    <>
      <Script
        defer
        src='https://www.livecoinwatch.com/static/lcw-widget.js'
      ></Script>
      <Box
        py={2}
        className='livecoinwatch-widget-5'
        lcw-base='USD'
        lcw-color-tx='#f4f4f4'
        lcw-marquee-1='coins'
        lcw-marquee-2='none'
        lcw-marquee-items='10'
      ></Box>
    </>
  );
};

export default CryptoMarquee;
