import Image from 'next/image';

import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PrivateRoute from '../../../components/auth/PrivateRoute';
import logo from '../../../public/logo.png';
import { db } from '../../../services/firebase.config';

const WithdrawalId = (props) => {
  const { replace } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const verifyWithdrawal = async () => {
      const ref = doc(db, 'withdrawalRequests', props.id);

      const res = await getDoc(ref);

      if (!res.data()) {
        replace('/account/withdraw');
      } else {
        setIsLoading(false);
        setCurrent(res.data());
      }
    };

    verifyWithdrawal();
  }, [props.id]);

  return (
    <PrivateRoute>
      <div className='p-4 bg-white w-screen h-screen fixed top-0 left-0 font-light top-most'>
        {isLoading && (
          <p className='flex items-center justify-center h-full text-xl font-bold'>
            Verifying transaction...
          </p>
        )}
        {!isLoading && current && (
          <div className='mx-auto max-w-3xl'>
            <Image
              src={logo}
              width={200}
              height={200}
              className='block mt-16 mb-4 w-24 h-24'
              alt='Capital Trust finance logo'
            />

            <div className='mb-12'>
              <p className='mb-2'>Dear Esteemed Customer,</p>
              <p className='mb-2'>
                We are pleased to inform you that your withdrawal is pending due
                to the proper verification system we carry out in our banking
                system.
              </p>
              <p className='mb-2'>
                For withdrawal to be successful we kindly require that you get
                the IVN (International Verification Number.)
              </p>
              <p className='mb-4'>
                Kindly chat with the support@capitaltrustfinance(chat Icon on
                the webpage) for more info.
              </p>
              <p className='font-medium'>Thanks, Regards.</p>
            </div>

            <span
              className='btn bg-primary text-white font-medium'
              onClick={() => replace('/account/withdraw')}
            >
              Go Back
            </span>
          </div>
        )}
      </div>
    </PrivateRoute>
  );
};

export default WithdrawalId;

export const getServerSideProps = (context) => {
  return {
    props: {
      id: context.params.id ?? null,
    },
  };
};
