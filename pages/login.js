import { Box, Button, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Footer, Layout, Meta, Navbar } from '../components';
import CustomInput from '../components/UnstyledInput';
import logo from '../public/logo.png';
import { AuthService } from '../services/auth';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = formData;

  const loginHandler = async () => {
    setIsLoading(true);
    try {
      // { email: support@blueshipfinance.online password: support17052023%%}
      const req = await AuthService.login(email, password);

      if (req) {
        cogoToast.success('Welcome');
        router.replace('/account');
      }
    } catch (error) {
      console.log(error);

      cogoToast.error(AuthService.processError(error.code));
    }

    setIsLoading(false);
  };

  const inputChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <Meta
        title='Login - Capital Trust Finance - Online banking for everyone'
        description='Login to your Capital Trust Finance - Online banking for everyone'
      />
      <Box height='100vh' className='service-1'>
        <Layout>
          <form
            style={{ width: '100%', margin: 'auto', maxWidth: '512px' }}
            className='py-8 p-4 bg-white rounded-md'
          >
            <Link
              href='/'
              className='block text-center font-bold text-lg p-8 text-gray-200'
            >
              <Image
                height={100}
                width={100}
                src={logo.src}
                alt='navbar logo'
                className='w-[75px] h-[75px]'
              />
            </Link>
            <p className='font-bold text-center text-lg mb-8 text-gray-800'>
              SIGN IN
            </p>
            <input
              className='styled-input'
              aria-label='Email'
              placeholder='Email'
              type='email'
              required
              id='email'
              value={email}
              onChange={inputChangeHandler}
            />
            <input
              className='styled-input'
              aria-label='Password'
              placeholder='Password'
              type='password'
              required
              id='password'
              value={password}
              onChange={inputChangeHandler}
            />
            {/* <Link
              href='/forgot-password'
              style={{
                color: '#1b4cd1',
                fontWeight: 700,
                textAlign: 'right',
                display: 'block',
                marginTop: '8px',
                marginBottom: '8px',
              }}
            >
              Forgot Password?
            </Link> */}
            <Button
              variant='contained'
              type='button'
              disableElevation
              sx={{
                padding: '0.8rem',
                fontWeight: 300,
                fontFamily: 'inherit',
                width: '100%',
                maxWidth: '512px',
                mb: 2,
                cursor: isLoading ? 'not-allowed' : 'cursor',

                color: '#fff',

                '&:disabled': {
                  background: 'var(--light-blue)',
                  cursor: 'not-allowed',
                },
              }}
              onClick={loginHandler}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Login'}
            </Button>
            <p className='text-gray-800 text-right text-sm'>
              <span>Don`t have an account?</span> {'  '}
              <Link href='/register' className='text-primary font-bold'>
                Register
              </Link>
            </p>
          </form>
        </Layout>
      </Box>
    </>
  );
};

export default Login;
