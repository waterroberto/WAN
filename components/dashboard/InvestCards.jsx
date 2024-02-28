import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { BiCreditCard, BiSolidBank } from 'react-icons/bi';

export default function InvestCards() {
  return (
    <Box maxWidth='1024px' mx='auto' mt={4}>
      <Typography
        variant='h5'
        component='p'
        sx={{ fontWeight: 700, color: 'var(--dark)' }}
        mb={4}
      >
        Quick Actions
      </Typography>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg'>
        <Link
          href='/account/cards'
          type='button'
          className='w-full p-6 pb-16 rounded-3xl bg-green-500 text-gray-50 relative'
        >
          <p className='text-2xl font-extrabold'>Virtual Card</p>
          <span className='absolute bottom-6 right-6 text-3xl'>
            <BiCreditCard />
          </span>
        </Link>

        {/*  */}
        {/* <Link
          href='/account/withdraw'
          type='button'
          className='w-full p-6 pb-16 rounded-3xl bg-orange-500 text-gray-50 relative'
        >
          <p className='text-2xl font-extrabold'>Withdraw</p>
          <span className='absolute bottom-6 right-6 text-3xl'>
            <BiSolidBank />
          </span>
        </Link> */}
      </div>
    </Box>
  );
}
