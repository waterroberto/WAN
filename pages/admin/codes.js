import { Box, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { Layout, Meta } from '../../components';
import AdminMobileNav from '../../components/admin/AdminMobileNav';
import Nav from '../../components/admin/Nav';
import AdminRoute from '../../components/auth/AdminRoute';
import Container from '../../components/dashboard/Container';
import { db } from '../../services/firebase.config';
import parseDate from '../../utils/parseDate';

const Codes = () => {
  const [codes, setCodes] = useState([]);
  let isMounted = useRef(true);

  useEffect(() => {
    const CODES = [];
    const ref = collection(db, 'codes');

    onSnapshot(ref, (snap) => {
      snap.docs.forEach((doc) => {
        CODES.push({ ...doc.data(), _id: doc.id });
      });

      setCodes(CODES);
    });
  }, []);

  const generateNewCode = async () => {
    const collectionRef = collection(db, 'codes');

    const randomNumber = Math.floor(Math.random() * 999999 + 9999);

    const newCode = {
      code: randomNumber.toString(),
      date: new Date(),
      used: false,
    };

    try {
      cogoToast.loading('Generating new code...');

      await addDoc(collectionRef, newCode);

      cogoToast.success('Code generated.');

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
      cogoToast.error('Error generating code');
    }
  };

  return (
    <AdminRoute>
      <Meta title='Admin Portal' description='Admin Portal' />
      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Nav />

        <Layout>
          <Box mt={8} sx={{ color: '#f5f5f5' }}>
            <Typography fontSize={24} fontWeight={700} mb={4}>
              Withdrawal Codes
            </Typography>

            <div className='my-4 mb-8'>
              <button
                className='p-4 px-16 bg-primary text-center rounded-md text-sm text-white'
                onClick={generateNewCode}
              >
                Generate new code
              </button>
            </div>

            {/*  */}
            {codes && codes.length > 0 ? (
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {[...codes]
                  .sort((a, b) => a.used - b.used)
                  .map((code) => (
                    <div
                      key={code.code}
                      className='p-4 bg-gray-600 text-gray-100 rounded-md max-w-sm'
                    >
                      <span
                        className={`inline-block mb-4 text-[12px] p-2 px-4 rounded-full ${
                          code.used
                            ? 'text-red-200 bg-red-800'
                            : 'text-green-200 bg-green-900'
                        }`}
                      >
                        {code.used ? 'Used' : 'Not Used'}
                      </span>
                      <p className='text-lg font-light'>{code.code}</p>

                      <button
                        className={`bg-gray-400 text-white mt-2 text-sm p-2 px-6 rounded-md`}
                        onClick={() => {
                          window.navigator.clipboard
                            .writeText(code.code)
                            .then(() => cogoToast.success('Copied!'));
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  ))}
              </div>
            ) : (
              <Container>
                <p className='text-2xl text-gray-800'>No withdrawal codes</p>
              </Container>
            )}
          </Box>
        </Layout>
      </Box>
      <AdminMobileNav />
    </AdminRoute>
  );
};

export default Codes;
