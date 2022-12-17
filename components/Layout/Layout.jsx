import { Box } from '@mui/material';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        padding: {
          xs: '3rem 1rem',
          sm: '4rem 2rem',
          lg: '4rem 3rem',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
