import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Layout, NewsLetter } from '../';
import logo from '../../public/logo.png';
import manager from '../../public/manager.png';

const Footer = () => {
  return (
    <div className='mt-24 bg-black text-gray-200 p-4'>
      <div className='rounded-md -mt-16 max-w-3xl mx-auto bg-primary-dark p-4 border-b flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-gray-50'>
        {/*  */}
        <div className='flex items-center gap-2'>
          <span className='p-2 w-16 h-16 bg-secondary flex items-center justify-center rounded-lg'>
            <MdOutlineMailOutline className='text-2xl' />
          </span>
          <div>
            <p className='text-lg font-extrabold'>Email Us</p>
            <span className='text-sm font-light'>
              support@capitaltrustfinance.online
            </span>
          </div>
        </div>
        {/*  */}
        <div className='h-4 w-[1px] bg-gray-100 hidden sm:block'></div>
        {/*  */}
        <div className='flex items-center gap-2 mt-4 sm:mt-0'>
          <Image
            src={manager.src}
            alt='account manager at capital trust finance'
            className='w-16 h-16 '
            width={100}
            height={100}
          />
          <div>
            <span className='text-[12px] font-light uppercase'>
              Account Manager on Signal
            </span>
            <p className='text-lg font-extrabold'>Angelina Montello</p>
            <span className='text-sm font-light'>+1 (614) 379-3692</span>
          </div>
        </div>
      </div>
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
                alt='capital trust finance logo'
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
              <Typography>support@capitaltrustfinance.online</Typography>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default Footer;
