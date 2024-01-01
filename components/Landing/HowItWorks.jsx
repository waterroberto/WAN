import React from 'react';
import { MdLooks3, MdLooksOne, MdLooksTwo } from 'react-icons/md';

const steps = [
  {
    icon: <MdLooksOne />,
    title: 'Registration',
    content:
      'Account creation is easy, we summarize the application process to simple steps.',
  },
  {
    icon: <MdLooksTwo />,
    title: 'Account Verification',
    content:
      'We verify your details such as a Government issued ID and Proof of Address.',
  },
  {
    icon: <MdLooks3 />,
    title: 'Mobile Banking',
    content:
      'Enjoy the multiple amazing features we have to offer, 24/7 customer support, etc.',
  },
];

const HowItWorks = () => {
  return (
    <section className='p-4 py-16 md:p-16 xl:px-32 bg-gray-900'>
      <p className='mb-8 text-center text-2xl font-extrabold text-gray-200 md:text-3xl'>
        How it <span className='text-primary'>Works</span>
      </p>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {steps.map((step) => (
          <div
            key={step.title}
            className='flex flex-col items-center justify-center gap-4 p-6 text-gray-200 mx-auto max-w-sm'
            data-aos='fade-up'
          >
            <span className='text-primary text-6xl'>{step.icon}</span>
            <p className='text-center font-extrabold text-xl'>{step.title}</p>
            <p className='text-center text-gray-100 font-light'>
              {step.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
