import { Box, Stack } from '@mui/material';
import React from 'react';

const Dash = () => {
  return (
    <Stack
      direction='row'
      width='100%'
      alignItems='center'
      justifyContent='flex-start'
      sx={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
    >
      <Box bgcolor='#1b4cd1' sx={{ height: '3px', width: '100%' }}></Box>
      <Box
        bgcolor='rgb(10, 10, 155, 0.4)'
        sx={{ height: '3px', width: '100%' }}
      ></Box>
      <Box bgcolor='#FE8235' sx={{ height: '3px', width: '100%' }}></Box>
    </Stack>
  );
};

export default Dash;
