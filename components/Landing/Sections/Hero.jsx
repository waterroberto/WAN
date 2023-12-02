import { ArrowForwardRounded } from '@mui/icons-material';
import { Box, Button, Grid, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import Image from "next/image";
import { Layout } from '../../';
import HeroSlide from '../../../assets/hero-slide-1.png'
import heroShape_12 from '../../../assets/hero-shape-12.png'


const Blur = styled('div')(({ theme }) => ({
  background: '#a84322',
  filter: 'blur(100px)',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  position: 'absolute',
  bottom: '-200px',
  left: '-200px',
}));

const Hero = () => {
  return (
    <Box
      minHeight='100vh'
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: '#edf9f9'
        // background:
        //   'url("https://firebasestorage.googleapis.com/v0/b/massaa-bank.appspot.com/o/scott-graham-5fNmWej4tAA-unsplash.jpg?alt=media&token=d1c44cfa-5fa6-4f9c-8361-808032898cfb") no-repeat center center/cover',

        // '&:after': {
        //   content: "''",
        //   position: 'absolute',
        //   background: 'rgba(0, 0, 0, 0.7)',
        //   top: 0,
        //   left: 0,
        //   width: '100%',
        //   height: '100%',
        // },
        // '& *': {
        //   zIndex: 2,
        // },
      }}
      width='100%'
    >
      <Grid container columns={12} spacing={2} pt={8}>
        <Grid
          item
          xs={12} 
          sm={12}
          md={6} 
          width="100%" 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Layout>
            <Typography
              component='h1'
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: '2rem',
                  sm: '4rem',
                  lg: '4.5rem',
                },
                color: 'secondary',
              }}
            >
              <Typography
                component='span'
                color='primary'
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: '2rem',
                    sm: '4rem',
                    lg: '4.5rem',
                  },
                }}
              >
                South{' '}
              </Typography>
              Banking Institute
            </Typography>
            <Typography
              component='h2'
              color='secondary.main'
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 300,
                fontFamily: 'inherit',
              }}
            >
              Our services are tailored towards ensuring sustainable investment,
              financial freedom and security.. We provide you with loans needed
              to fund your personal & business needs.
            </Typography>
            <Stack
              direction='row'
              spacing={2}
              mt={4}
              alignItems='center'
              justifyContent='flex-start'
              width='100%'
            >
              <Button
                variant='contained'
                href='/register'
                disableElevation
                endIcon={<ArrowForwardRounded />}
                sx={{
                  borderRadius: '2rem',
                  padding: '1rem 2rem',
                  color: '#fff',
                  background: 'primary.main',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                }}
              >
                Join Us
              </Button>
              <Button
                variant='outlined'
                href='/login'
                disableElevation
                endIcon={<ArrowForwardRounded />}
                sx={{
                  borderRadius: '2rem',
                  padding: '1rem 2rem',
                  color: 'secondary.main',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',

                }}
              >
                Login
              </Button>
            </Stack>
          </Layout>
        </Grid>
        <Grid
          item
          xs={12} 
          sm={12}
          md={6} 
          width="100%" 
          sx={{
            // width: '500px',
            // height: '500px',
            // transform: 'rotate(-45deg) translateY(35%) translateX(15%)',
            // background:
            //   'url("https://images.unsplash.com/photo-1647462659318-1e9702f92b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80") no-repeat center center/cover',
            // opacity: 0.8,
            // '&:before': {
            //   content: "''",
            //   position: 'absolute',
            //   background: `url(${heroShape_12.src})`,
            //   top: "57%",
            //   left: 0,
            //   width: '80px',
            //   height: '80px',
            // },
            // '& *': {
            //   zIndex: 2,
            // },
          }}
        >

        <Layout>

          <Box
            sx ={{
                top: {md:'100px'},
                right: {xs:'120px', md:'150px'},
                position: 'absolute',
                // zIndex: -1,
                animation: '1500ms infinite ease-in-out 2s',
            }}
          >
            <Image
              src={heroShape_12}
              alt="Blue Chip finance customers. People smiling and happy"
              style={{
                // width: "100%",
                maxWidth: "120px",
                height: "auto",
                filter: "hue-rotate(10deg)",
              }}
            />
          </Box>
          
          <Image
            src={HeroSlide}
            alt="Blue Chip finance customers. People smiling and happy"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "800px",
              maxHeight: "900px",
              filter: "hue-rotate(10deg)",
            }}
          />
        </Layout>

        </Grid>
      </Grid>
      <Blur />
    </Box>
  );
};

export default Hero;
