// import logo from '@/assets/apex-trades.png';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

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
    <header className='z-50 bg-white w-full fixed top-0 left-0 max-h-44'>
      <nav className='padding border-b border-b-gray-200 flex items-center justify-between'>
        <Link href='/'>
          <img src={''} alt='navbar logo' className='max-w-[150px]' />
        </Link>

        <div className='items-center gap-4 hidden sm:flex'>
          <Link
            href='/login'
            className='btn border border-primary text-primary hover:text-secondary hover:border-secondary'
          >
            Login
          </Link>
          <Link
            href='/register'
            className='btn bg-primary text-white hover:bg-secondary'
          >
            Create Account
          </Link>
        </div>

        <button
          aria-label='navbar toggle Button'
          onClick={toggleMobileNav}
          className='block sm:hidden text-primary p-2 z-20 duration-500 border-[1px] rounded-md'
        >
          <CgMenu className='text-2xl' />
        </button>
      </nav>

      <ul className='padding items-center gap-8 hidden sm:flex'>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.url}
              className='text-[13px] text-secondary font-semibold uppercase'
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <ul
        className={`p-4 absolute w-full padding items-start gap-8 flex sm:hidden flex-col shadow-2xl bg-light duration-500 ${
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
              className='text-[13px] text-secondary font-semibold uppercase'
            >
              {link.name}
            </Link>
          </li>
        ))}

        <div className='py-4 mt-4 tems-center gap-4'>
          <Link
            href='/login'
            className='btn border border-secondary text-secondary'
          >
            Login
          </Link>
          <Link href='/register' className='btn bg-secondary text-white'>
            Create Account
          </Link>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
