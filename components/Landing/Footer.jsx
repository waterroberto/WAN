import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Layout, NewsLetter } from '../';
import logo from '../../public/logo.png';

const Footer = () => {
  return (
    <div className='mt-24 bg-black text-gray-200 p-4'>
      <div className='rounded-md -mt-16 max-w-[768px] mx-auto bg-primary padding border-b flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-gray-50'>
        <div className='flex items-center gap-2'>
          <span className='p-2 w-16 h-16 bg-primary-dark flex items-center justify-center rounded-full'>
            <FiPhoneCall className='text-2xl' />
          </span>
          <div>
            <p className='text-xl font-extrabold'>Call Us</p>
            <span className='text-sm font-light'>+44 458-796-8314</span>
          </div>
        </div>
        <div className='h-4 w-[1px] bg-gray-100 hidden sm:block'></div>

        <div className='flex items-center gap-2'>
          <span className='p-2 w-16 h-16 bg-primary-dark flex items-center justify-center rounded-full'>
            <MdOutlineMailOutline className='text-2xl' />
          </span>
          <div>
            <p className='text-xl font-extrabold'>Message Us</p>
            <span className='text-sm font-light'>
              support@ravdakfinance.online
            </span>
          </div>
        </div>
      </div>

      {/* <NewsLetter /> */}
      <Layout>
        <Grid
          container
          mx='auto'
          rowSpacing={4}
          columnSpacing={{ sm: 2, md: 4 }}
          columns={12}
        >
          {/* . . . */}
          <Grid item xs={12} sm={6} md={4} width='100%'>
            <Link href='/'>
              <Image
                alt='ravdak finance logo'
                src={logo.src}
                height={100}
                width={100}
                style={{ width: '70px', height: '70px' }}
                className='w-[50px] h-[50px]'
              />
            </Link>
            <Typography
              py={2}
              mb={4}
              sx={{
                fontFamily: 'inherit',
                color: 'var(--primary)',
                fontWeight: 300,
                fontSize: { xs: '1rem', sm: '1rem', md: '1.1rem' },
              }}
            >
              We offer the financing needed to support your personal & cooporate
              needs, while assuring you the financial freedom and security you
              are looking for.
            </Typography>
          </Grid>
          {/* . . . */}
          <Grid item xs={12} sm={6} md={4} width='100%'>
            <Typography
              mb={2}
              sx={{
                fontFamily: 'inherit',
                color: 'var(--primary)',
                fontWeight: 600,
                fontSize: {
                  xs: '1.4rem',
                  sm: '1.4rem',
                  md: '1.5rem',
                },
              }}
            >
              Quick Links
            </Typography>
            <Stack
              direction='column'
              sx={{
                '& a': {
                  marginBottom: '0.75rem',
                  fontFamily: 'inherit',
                  fontWeight: 300,
                },
              }}
            >
              <Link href='/'>Home</Link>
              <Link href='/about'>About us</Link>
              <Link href='/services'>Services</Link>
              <Link href='/contact'>Contact</Link>
              <Link href='/login'>Login</Link>
            </Stack>
          </Grid>
          {/* . . . */}
          <Grid item xs={12} sm={6} md={4} width='100%'>
            <Typography
              mb={2}
              sx={{
                fontFamily: 'inherit',
                color: 'var(--primary)',
                fontWeight: 600,
                fontSize: {
                  xs: '1.4rem',
                  sm: '1.4rem',
                  md: '1.5rem',
                },
              }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                '& p': {
                  marginBottom: '0.75rem',
                  fontFamily: 'inherit',
                  fontWeight: 300,
                },
              }}
            >
              <Typography>support@ravdakfinance.online</Typography>
              <Typography>+44 458-796-8314</Typography>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default Footer;
