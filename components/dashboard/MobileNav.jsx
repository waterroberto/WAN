import React from 'react';
import { Stack } from '@mui/material';

const MobileNav = () => {
  return (
    <Stack
      direction='row'
      sx={{
        display: { xs: 'flex', sm: 'none' },
        color: 'var(--mid)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        background: 'var(--dark)',
        width: '100%',
        height: '4rem',

        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          opacity: 0.75,
          background: `url("https://firebasestorage.googleapis.com/v0/b/elite-financial-services.appspot.com/o/pattern.png?alt=media&token=657fc54a-3643-40cb-b691-15c566a9f527") no-repeat center center/cover`,
        },

        '& *': {
          zIndex: 5,
        },
      }}
    ></Stack>
  );
};

export default MobileNav;
