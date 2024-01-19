import Link from 'next/link';
import React from 'react';
import heroImage from '../../../public/hero-image.jpg';

const Hero = () => {
  return (
    <section
      className='overlay padding pt-32 lg:pt-24 hero-section grid grid-cols-1 gap-8 md:grid-cols-3 items-center h-[768px]'
      style={{
        background: `url('${heroImage.src}') no-repeat center center/cover`,
      }}
    >
      <div className='rounded-md p-8 md:col-span-2 w-full max-h-[600px] flex flex-col justify-center gap-4 mt-16 lg:mt-0'>
        <h1 className='text-5xl font-extrabold md:text-7xl text-gray-100'>
          Connecting all your banking needs
        </h1>
        <h2 className='text-xl md:text-2xl font-light text-gray-100'>
          We present products and services that are just right for you. Manage
          and control your money at your convenience, preparing you for
          financial independence and powering your financial future.
        </h2>

        <div className='mt-4 flex items-center gap-4'>
          <Link
            href='/register'
            className='btn text-white bg-secondary py-4 px-12'
          >
            Create Account
          </Link>
          <Link href='/login' className='btn text-white bg-primary py-4 px-12'>
            Sign In
          </Link>
        </div>
      </div>
      <div />
    </section>
  );
};

export default Hero;
