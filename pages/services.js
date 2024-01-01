import Link from 'next/link';
import React from 'react';
import { ContactInformation, FAQs, Footer, Meta, Navbar } from '../components';
import BankConvenience from '../components/Landing/BankConvenience';
import HowItWorks from '../components/Landing/HowItWorks';
import Features from '../components/Landing/Sections/Features';

const Services = () => {
  return (
    <>
      <Meta
        title='Services | Capital Trust Financie - Online loan banking for everyone'
        description='What services Capital Trust Finance offers - Online loan banking for everyone'
      />

      <Navbar />
      <section className='padding products-hero-section pt-32 lg:pt-24 h-[600px] grid grid-cols-1 gap-8 lg:grid-cols-3'>
        <div className='lg:col-span-2 w-full h-full text-light flex flex-col justify-center gap-4'>
          <h1 className='text-4xl sm:text-5xl font-extrabold md:text-6xl'>
            Award Winning, World Leading Financial Unicorn.
          </h1>
          <h2 className='text-xl md:text-2xl text-light font-light'>
            We provide you with 24/7 functional banking, this helps you run a
            reliable business and takes your personal investment growth to the
            next level.
          </h2>

          <div className='flex items-center gap-4'>
            <Link
              href='/register'
              className='btn bg-white text-primary py-4 px-12'
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
      {/*  */}
      <Features />
      {/*  */}
      <BankConvenience />
      {/*  */}
      <HowItWorks />
      <ContactInformation />
      <Footer />
    </>
  );
};

export default Services;
