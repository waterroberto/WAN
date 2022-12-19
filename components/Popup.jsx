import { Stack, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React, { forwardRef, useEffect, useState } from 'react';
import { amounts, receivers, times } from '../static/Data';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Popup = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const min = 120000;
  const max = 600000;

  setInterval(() => {
    handleClick();
    console.log('New popup...');
  }, Math.abs(Math.floor(Math.random() * (max - min) + min)));

  return (
    <>
      {children}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{
            '& .MuiAlert-icon, .MuiAlert-action': {
              display: 'none',
            },
          }}
        >
          <Alert
            onClose={handleClose}
            sx={{ width: '100%', background: '#0d1631' }}
          >
            <Typography mb={1} sx={{ fontWeight: 700 }}>
              {receivers[Math.abs(Math.floor(Math.random() * 300))]}
            </Typography>
            <span>
              received
              <Typography component='span' sx={{ color: 'primary.main' }}>
                {amounts[Math.abs(Math.floor(Math.random() * 20))]}{' '}
              </Typography>
              {times[[Math.abs(Math.floor(Math.random() * 5))]]} ago
            </span>
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default Popup;
