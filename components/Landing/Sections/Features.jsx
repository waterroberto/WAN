import icon3 from '../../../assets/icons/ico-home-03.png';
import icon4 from '../../../assets/icons/ico-home-04.png';
import icon5 from '../../../assets/icons/ico-home-05.png';
import icon6 from '../../../assets/icons/ico-home-06.png';
// import bg from '@/public/bg-analytics.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

const features = [
  {
    name: 'security',
    content:
      'We offer a wide range of convenient, inexpensive, and secure, secervices. Making you choose and take practical steps to keep your account safe.',
    image: icon6,
  },

  {
    name: 'Targetted Features',
    content:
      'We have the tools tailored to your specific needs, plus hundreds of options specific education opportunities.',
    image: icon3,
  },
  {
    name: 'Savings',
    content:
      'Hop on our smart trading plans that suit your pocket. Save and earn at your own pace.',
    image: icon4,
  },
  {
    name: 'Investment Monitor',
    content:
      'Our investment platform has been specifically designed for the needs of conservative investors, watch your investment as they seed, to catch possible losses.',
    image: icon5,
  },
];

const Features = () => {
  return (
    <section className='bg-gray-900'>
      <div className='py-16 flex flex-col items-center justify-center gap-2 text-white'>
        <h4 className='text-4xl font-extrabold md:text-5xl text-center'>
          Features & Products
        </h4>
        <h5 className='text-lg text-center md:text-xl font-normal'>
          Enjoy several benefits and explore awesome features.
        </h5>
      </div>
      <div className='padding grid grid-cols-1 md:grid-cols-2 gap-16'>
        {features.map((feature) => (
          <div
            key={feature.name}
            className='flex flex-col-reverse items-center justify-center md:flex-row  gap-4 w-full'
            data-aos='fade-up'
          >
            <div className='text-center md:text-right'>
              <p className='text-lg font-extrabold text-[#009fdf] capitalize'>
                {feature.name}
              </p>
              <p className='text-white my-2 text-sm font-medium'>
                {feature.content}
              </p>
              <Link
                href='/register'
                className='font-bold text-primary text-sm inline-flex items-center gap-2'
              >
                Get Started <BsChevronRight />
              </Link>
            </div>
            <Image
              alt={feature.name}
              src={feature.image}
              height={75}
              width={75}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
