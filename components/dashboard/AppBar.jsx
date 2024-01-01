import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { HiUser } from 'react-icons/hi2';

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
      <Link href='/account/profile'>
        <Typography
          sx={{ color: 'var(--light-blue)', fontSize: '2rem', pt: 1 }}
        >
          <HiUser />
        </Typography>
      </Link>
    </Stack>
  );
};

export default AppBar;
