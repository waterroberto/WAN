import Link from 'next/link';
import React, { useContext } from 'react';
import { BiSolidInfoCircle } from 'react-icons/bi';
import userDataContext from '../../context/UserDataContext';

const VerifyAccount = () => {
  const { userData } = useContext(userDataContext);

  return (
    <>
      {userData?.accountLevel < 3 && (
        <div
          className={`p-3 my-4 text-sm bg-blue-500 flex items-center text-white w-full gap-1 rounded-md ${
            userData.accountLevel === 1
              ? 'bg-orange-500'
              : userData.accountLevel === 2
              ? 'bg-green-600'
              : ''
          }`}
        >
          <BiSolidInfoCircle />
          <span>
            {userData.accountLevel === 1
              ? 'Complete your account info. '
              : userData.accountLevel === 2
              ? 'Update KYC. '
              : ''}
          </span>
          <Link href='/account/kyc' className='font-extrabold'>
            Click Here
          </Link>
        </div>
      )}
    </>
  );
};

export default VerifyAccount;
