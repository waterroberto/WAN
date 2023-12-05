import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section
      className='overlay padding pt-32 lg:pt-24 hero-section h-screen grid grid-cols-1 gap-8 lg:grid-cols-3'
      style={{
        background: `url('https://firebasestorage.googleapis.com/v0/b/ravdak-finance.appspot.com/o/carlos-muza-hpjSkU2UYSU-unsplash.jpg?alt=media&token=42ab214c-af1a-4533-9607-9c8e94ffe974') no-repeat center center/cover`,
      }}
    >
      <div className='lg:col-span-2 w-full h-full text-gray-50 flex flex-col justify-center gap-4 mt-16 lg:mt-0'>
        <h1 className='text-5xl font-extrabold sm:text-6xl'>
          Bank Easy. Bank Now. Bank RavDak.
        </h1>
        <h2 className='text-xl lg:text-2xl font-light'>
          Our customers trust us for their business and personal needs. Your
          financial journey starts here. We prepare you for financial
          independence, powering your financial future.
        </h2>

        <div className='mt-8 flex flex-col sm:flex-row sm:items-center gap-4'>
          <Link
            href='/register'
            className='btn bg-white text-primary py-4 px-12'
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
