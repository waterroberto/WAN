// import logo from '@/assets/apex-trades.png';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';

const links = [
  { name: 'home', url: '/' },
  { name: 'about us', url: '/about' },
  { name: 'services', url: '/services' },
  { name: 'contact us', url: '/contact' },
];

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  return (
    <header className='z-50 w-full max-h-44 relative'>
      <div className='bg-primary padding border-b flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-gray-50'>
        <div className='flex items-center gap-1'>
          <FiPhoneCall />
          <span className='text-sm font-light'>+1 (458) 796-8314</span>
        </div>
        <div className='h-4 w-[1px] bg-gray-100 hidden sm:block'></div>
        <div className='flex items-center gap-1'>
          <MdOutlineMailOutline />
          <span className='text-sm font-light'>
            support@ravdakfinance.online
          </span>
        </div>
      </div>
      <nav className='bg-white padding border-b flex items-center justify-between'>
        <Link href='/'>
          <img src={''} alt='navbar logo' className='max-w-[150px]' />
        </Link>

        <ul className='padding items-center gap-8 hidden md:flex'>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                className='text-[13px] text-secondary font-medium uppercase'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href='/login'
          className='btn bg-primary text-white hidden md:block'
        >
          Sign In
        </Link>
        <button
          aria-label='navbar toggle Button'
          onClick={toggleMobileNav}
          className='block md:hidden bg-primary text-white p-2 z-20 duration-500 border-[1px] rounded-md'
        >
          <CgMenu className='text-2xl' />
        </button>
      </nav>

      <ul
        className={`p-4 absolute w-full padding items-start gap-8 flex md:hidden flex-col shadow-2xl bg-light duration-500 ${
          showMobileNav ? 'navbar-open' : 'navbar-close'
        }`}
      >
        {links.map((link) => (
          <li
            key={link.name}
            className='py-4 border-b border-b-gray-100 w-full'
          >
            <Link
              href={link.url}
              className='text-[13px] text-secondary font-medium underline uppercase'
            >
              {link.name}
            </Link>
          </li>
        ))}

        <div className='py-4 mt-4 tems-center gap-4'>
          <Link href='/login' className='btn bg-secondary text-white'>
            Login Online Banking
          </Link>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
