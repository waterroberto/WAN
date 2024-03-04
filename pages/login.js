import { Box, Button, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Footer, Layout, Meta, Navbar } from '../components';
import CustomInput from '../components/UnstyledInput';
import logo from '../public/logo.png';
import { AuthService } from '../services/auth';
import { db } from '../services/firebase.config';

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
        const res = await getDoc(doc(db, 'users', req.uid));
        const data = res.data();

        if (data)
          if (!data.isBlocked) {
            cogoToast.success('Welcome to CTF Bank');
            router.replace('/account');
          } else
            cogoToast.warn(
              'Account Blocked! Contact support for more information.'
            );
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
        title='Login - WAN Cooperation Finance - Online banking for everyone'
        description='Login to your WAN Cooperation Finance - Online banking for everyone'
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
              {/* <Image
                height={100}
                width={100}
                src={logo.src}
                alt='navbar logo'
                className='w-[75px] h-[75px]'
              /> */}
                <h2 className="text-2xl font-bold text-gray-800">WAN Cooperation Finance</h2>

            </Link>
            <p className='text-center text-lg mb-8 text-gray-800'>
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
            <p className='text-gray-800 my-6 text-right text-sm'>
              <Link href='/forget-password' className='text-[#009fdf] font-bold'>
                Forgot Password?
              </Link>
            </p>
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
                background: "#009fdf",

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
              <Link href='/register' className='text-[#009fdf] font-bold'>
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
