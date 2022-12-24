import React from 'react';
import { Stack, Typography } from '@mui/material';
import { MdNotifications } from 'react-icons/md';
import Link from 'next/link';

const AppBar = (props) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{
        width: '100%',
        mb: 4,
      }}
    >
      <Typography
        variant='h5'
        sx={{ color: 'var(--light-blue)', fontWeight: 700 }}
      >
        {props.page}
      </Typography>
      <Link href='/dashboard/notifications'>
        <Typography
          sx={{ color: 'var(--light-blue)', fontSize: '2rem', pt: 1 }}
        >
          <MdNotifications />
        </Typography>
      </Link>
    </Stack>
  );
};

export default AppBar;
