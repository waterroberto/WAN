import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section
      className='overlay padding pt-32 lg:pt-24 hero-section grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-2 items-center h-[768px]'
      style={{
        background: `url('https://firebasestorage.googleapis.com/v0/b/ravdak-finance.appspot.com/o/carlos-muza-hpjSkU2UYSU-unsplash.jpg?alt=media&token=42ab214c-af1a-4533-9607-9c8e94ffe974') no-repeat center center/cover`,
      }}
    >
      <div className='rounded-md p-8 md:col-span-2 lg:col-span-1 w-full max-h-[600px] flex flex-col justify-center gap-4 mt-16 lg:mt-0 bg-gray-100 shadow-lg'>
        <h1 className='text-4xl font-extrabold md:text-5xl text-gray-700'>
          Bank Easy. Bank Now. Bank RavDak.
        </h1>
        <h2 className='text-lg md:text-xl font-light text-gray-500'>
          Manage and control your money at your convenience, your financial
          journey starts here. We prepare you for financial independence,
          powering your financial future.
        </h2>

        <div className='mt-4 flex flex-col sm:flex-row sm:items-center gap-4'>
          <Link href='/login' className='btn text-white bg-primary py-4 px-12'>
            Login Online Banking
          </Link>
        </div>
      </div>
      <div />
    </section>
  );
};

export default Hero;
