import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const BankConvenience = () => {
  return (
    <div className='service-1 md:pr-24 lg:pr-32'>
      <div className='p-4 py-8 sm:p-8 md:p-16 xl:px-32 gap-4'>
        <p className='mt-16 font-extrabold text-xl sm:text-2xl md:text-3xl text-gray-50'>
          Bank At Your Convenience
        </p>

        <p className='text-gray-100 my-4 font-light mb-8'>
          We understand that your time is valuable, and that`s why we offer a
          range of flexible and accessible banking solutions tailored to your
          needs.
        </p>
        <Link href='/login' className='btn bg-primary text-white'>
          Login Online Banking <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BankConvenience;
