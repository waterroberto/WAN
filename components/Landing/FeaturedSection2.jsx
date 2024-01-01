import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import people from '../../public/company-people-2.jpg';

const FeaturedSection2 = () => {
  return (
    <div className='padding pattern-bg mb-16' data-aos='fade-up'>
      <div className='bg-gray-100 p-4 py-8 h-full grid grid-cols-1 md:grid-cols-2 mt-16 md:mt-32'>
        <Image
          src={people.src}
          width={400}
          height={400}
          className='w-full max-w-[512px] mx-auto h-[300px] md:h-[400px] bg-secondary rounded-2xl -mt-32'
        />
        {/*  */}
        <div className='p-4 mb-8'>
          <p className='mb-4 text-3xl text-gray-800 font-extrabold'>
            Choose Your Product
          </p>
          <p className='font-light text-gray-600 mb-8'>
            Enjoy several benefits and explore the awesome services we have to
            offer.Our services include 24/7 functional banking, Secure
            transactions and User-targetted financial advice, this helps you run
            a reliable business and takes your growth to the next level.
          </p>

          <Link
            href='/services'
            className='block md:inline-block btn text-white bg-primary-dark py-6 px-16'
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection2;
