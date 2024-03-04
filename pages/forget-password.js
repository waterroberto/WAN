import {Meta} from '../components';
import { auth } from '../services/firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import cogoToast from 'cogo-toast';


const ForgotPassword = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [formdata, setFormdata] = useState({ email: '' });

  const { email } = formdata;

  const inputChangeHandler = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    await sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res)
        cogoToast.success('A link to reset your password has been sent');
        setIsLoading(false);

        setTimeout(() => {
          router.push('/login');
        }, 2000);
      })
      .catch((error) => {
        cogoToast.error('Error! Cannot send link at this time.');

        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Meta title='Forgot Password | WAN Cooperation | Create an account on WAN Cooperation' />
      <section className='padding py-16 min-h-screen bg-gray-800 flex items-center justify-center'>
        <div className='bg-white shadow-md rounded-md p-6 w-full max-w-lg'>
          <div className='mb-4'>
            <p className='text-gray-700 font-extrabold text-2xl'>
              Forgot Password?
            </p>
            <p className='text-gray-700 text-sm'>
              Get a link to reset your password
            </p>
          </div>
          <form className='gap-6 py-4' onSubmit={loginHandler}>
            <div className='w-full mb-4'>
              <label
                htmlFor='email'
                className='mb-2 font-semibold text-sm text-gray-700'
              >
                Email Address *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder=''
                className='px-4 py-3 outline-none border border-gray-100 w-full rounded-md text-gray-700 bg-gray-50'
                required
                value={email}
                onChange={inputChangeHandler}
              />
            </div>

            <button
              type='submit'
              className={`btn ${
                isLoading ? 'bg-gray-600' : 'bg-primary hover:bg-secondary'
              } text-center mt-8 py-4 text-white  w-full`}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Send Password Reset Link'}
            </button>
          </form>

          <div className='text-right mt-4'>
            <Link href='/login' className='text-sm text-primary font-semibold'>
              Go Back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;