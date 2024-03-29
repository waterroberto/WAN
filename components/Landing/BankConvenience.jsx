import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const BankConvenience = () => {
  return (
    <div className='service-1 md:pr-24 lg:pr-32'>
      <div className='p-4 py-8 sm:p-8 md:p-16 xl:px-32 gap-4'>
        <p className='mt-16 font-extrabold text-xl sm:text-2xl md:text-3xl text-gray-50'>
          Internet Banking - A brand new experience
        </p>

        <p className='text-gray-100 my-4 font-light mb-8'>
          Online banking can save you a lot of time and effort, you can
          undertake most transactions from the comforts of your home. We
          understand that your time is valuable, and that`s why we offer a range
          of flexible and accessible banking solutions tailored to your needs.
        </p>
        <Link href='/register' className='btn bg-primary-dark text-white'>
          Get Started Now <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BankConvenience;
