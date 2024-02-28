import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import people from '../../assets/pexels-canva-studio-3153198.jpg';

const FeaturedSection = () => {
  return (
    <div className='padding  bg-black' data-aos='fade-up'>
      <div className='bg-gray-100 p-4 py-8 h-full grid grid-cols-1 md:grid-cols-2 mt-16 md:mt-32'>
        <div className='p-4 mb-8'>
          <p className='text-lg font-light mb-2'>~ WAN Cooperation Finance </p>
          <p className='mb-4 text-3xl text-gray-800 font-extrabold'>
            Who we are. What we do.
          </p>
          <p className='font-light text-gray-600 mb-8'>
           WAN Cooperation Finance  is one of the first of global virtual banking
            services, offering quick, simple and convenient way to take command
            of your bank account, on your mobile phone. Explore the power of
            simpler and smarter banking.
          </p>

          <Link
            href='/about'
            className='block md:inline-block btn text-white bg-primary py-6 px-16'
          >
            Read More
          </Link>
        </div>

        <Image
          src={people.src}
          width={400}
          height={400}
          className='w-full max-w-[512px] mx-auto h-[300px] md:h-[400px] bg-secondary rounded-2xl -mb-24 md:-mt-32'
          alt="about our goals and purpose"
        />
      </div>
    </div>
  );
};

export default FeaturedSection;
