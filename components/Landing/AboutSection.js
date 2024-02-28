import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import people from '../../public/company-people.jpg';

const items = [ 
  {title: "Open an Account", subTitle: "Save at competitive interest rates with flexible withdrawals"},
  {title: "Apply For Loan", subTitle: "Union Bank offers a wide range of loans to make your vision a reality"},
  {title: "24/7 Banking", subTitle: "360 banking platforms that provides safe access to banking services"},
  {title: "Trade Finance", subTitle: "Banking solutions that are built on streamlining business processes"},

]

const AboutSection = () => {
  return (
    <div className='padding  bg-gray-900' data-aos='fade-up '>
      <div className=" bg-white w-full grid grid-cols-1 md:grid-cols-2 gap-1 lg:grid-cols-4 -mt-14 rounded-sm shadow-md">
        {items.map((item) => (
          <div key={item.title} className=' flex flex-col p-6'>
            <h4 className=" text-xl font-bold py-5 text-[#009fdf]">{item.title}</h4>
            <p className=" text-sm ">{item.subTitle}</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default AboutSection;
