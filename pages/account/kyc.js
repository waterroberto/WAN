import emailjs from '@emailjs/browser';
import cogoToast from 'cogo-toast';
import { doc, updateDoc } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { BiSolidImageAdd } from 'react-icons/bi';
import { GiPassport } from 'react-icons/gi';
import { HiIdentification } from 'react-icons/hi';
import { IoDocumentSharp } from 'react-icons/io5';
import { TbLicense } from 'react-icons/tb';
import PrivateRoute from '../../components/auth/PrivateRoute';
import Sidebar from '../../components/dashboard/Sidebar';
import { db } from '../../services/firebase.config';
import { UserService } from '../../services/user';

import { Box } from '@mui/material';
import { Dash, Layout, Meta, MobileNav } from '../../components';
import AppBar from '../../components/dashboard/AppBar';
import userDataContext from '../../context/UserDataContext';

const documents = [
  {
    id: 'passport',
    name: 'passport',
    icon: <GiPassport />,
  },
  {
    id: 'id',
    name: 'National ID',
    icon: <HiIdentification />,
  },
  {
    id: 'license',
    name: 'Driving License',
    icon: <TbLicense />,
  },
];

const KycDocumentUpload = () => {
  const router = useRouter();
  const [activeDoc, setActiveDoc] = useState('passport');

  const [document1, setDocument1] = useState(null);
  const [document2, setDocument2] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const { userData: data } = useContext(userDataContext);

  const uploadKycDocuments = async () => {
    if (document1 && document2) {
      if (data?.id) {
        setIsLoading(true);

        try {
          const kyc_documents = [];

          [document1, document2].forEach((document) => {
            UserService.getUrlFromFileUpload(
              'kycDocuments',
              data?.id,
              new Date().getUTCMilliseconds().toString(),
              document
            ).then((res) => {
              kyc_documents.push(res);

              console.log(kyc_documents);

              const userRef = doc(db, 'users', data?.id);

              updateDoc(userRef, {
                kyc_documents,
                kyc_submitted: true,
                kyc_approved: false,
                kyc_pending: true,
              }).then(() => {
                emailjs
                  .send(
                    'service_z5o73kw',
                    'template_6o0kkbu',
                    {
                      subject: 'Capital Trust Finance - KYC Submission',
                      receiver: `${data.firstName} ${data.lastName}`,
                      message1:
                        'Your KYC documentation has been received and is under review by our support team.',
                      message2:
                        'Please await our reponse and tend patience as your documents undergo verification.',
                      receiver_email: data.email,
                    },
                    'n_gNGTUIL777JfeI3'
                  )
                  .then(
                    (result) => {
                      console.log(result.text);
                    },
                    (error) => {
                      console.log(error.text);
                    }
                  );

                cogoToast.success('Kyc documents uploaded sucessfully.');

                setIsLoading(false);

                setDocument1(null);
                setDocument2(null);
              });
            });
          });
        } catch (error) {
          setIsLoading(true);
          cogoToast.error('Error! Cannot upload documents');

          console.log(error);
        }
      }
    } else {
      if (!document1) {
        cogoToast.error('Please upload front of document');
      }
      if (!document2) {
        cogoToast.error('Please upload back of document');
      }
    }
  };

  return (
    <PrivateRoute>
      <Meta
        title='CTF Bank - KYC Verification - Online Bank'
        description='CTF Bank | KYC Verification'
      />
      <Dash />
      <Box minHeight='100vh'>
        <Sidebar>
          <Layout>
            <AppBar page='KYC Verification' />

            {!data?.kyc_submitted && (
              // !data?.kyc_pending &&
              // !data?.kyc_approved &&
              <div>
                <div className='py-4 border-b border-b-gray-600 text-gray-800'>
                  <p className=''>
                    To verify your identity, please upload any of your document.
                  </p>
                </div>

                <div className='text-gray-800 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {documents.map((doc) => (
                    <button
                      type='button'
                      title={doc.name}
                      key={doc.id}
                      className={`flex items-center gap-2 capitalize border border-blue-300 p-3 text-blue-300 rounded-md duration-300 ${
                        activeDoc === doc.id ? 'shadow-blue-400 shadow-lg' : ''
                      }`}
                      onClick={() => setActiveDoc(doc.id)}
                    >
                      <span className='text-2xl'>{doc.icon}</span>
                      {doc.name}
                    </button>
                  ))}
                </div>

                <div className='mt-16 text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-8'>
                  <div>
                    <p className='font-bold mb-4'>Front</p>
                    <label
                      htmlFor='documentFront'
                      className='min-h-[200px] shadow-lg border border-gray-600 p-4 rounded-lg cursor-pointer flex items-center justify-center gap-4'
                    >
                      {document1 && (
                        <Image
                          alt={document1?.name}
                          className='max-h-80 w-full rounded-lg object-contain'
                          width={100}
                          height={100}
                          src={URL.createObjectURL(document1)}
                        />
                      )}

                      <BiSolidImageAdd className='text-3xl' />
                    </label>

                    <input
                      type='file'
                      id='documentFront'
                      onChange={(e) => {
                        if (e.target.files) setDocument1(e.target?.files[0]);
                      }}
                      accept='.jpg, .jpeg, .png'
                      className='opacity-0'
                    />
                  </div>
                  <div className='text-gray-800'>
                    <p className='font-bold mb-4'>Back</p>
                    <label
                      htmlFor='documentBack'
                      className='min-h-[200px] shadow-lg border border-gray-600 p-4 rounded-lg cursor-pointer flex items-center justify-center gap-4'
                    >
                      {document2 && (
                        <Image
                          alt={document2?.name}
                          className='max-h-80 w-full rounded-lg object-contain'
                          width={100}
                          height={100}
                          src={URL.createObjectURL(document2)}
                        />
                      )}

                      <BiSolidImageAdd className='text-3xl' />
                    </label>
                    <input
                      type='file'
                      id='documentBack'
                      onChange={(e) => {
                        if (e.target.files) setDocument2(e.target?.files[0]);
                      }}
                      accept='.jpg, .jpeg, .png'
                      className='opacity-0'
                    />
                  </div>

                  {/*  */}
                  <button
                    type='button'
                    className={`btn mt-8 w-full  text-white ${
                      isLoading ? 'bg-gray-600' : 'bg-primary'
                    }`}
                    onClick={uploadKycDocuments}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Uploading documents...' : 'Upload'}
                  </button>
                </div>
              </div>
            )}

            {data?.kyc_submitted && data?.kyc_pending && (
              <div className='mt-16 text-gray-600 flex p-8 flex-col items-center justify-center mx-auto gap-4'>
                <IoDocumentSharp className='text-8xl' />
                <p className='text-4xl'>Pending KYC Verification...</p>
              </div>
            )}
            {data?.kyc_submitted &&
              data?.kyc_approved &&
              !data?.kyc_pending && (
                <div className='mt-16 text-green-500 flex p-8 flex-col items-center justify-center mx-auto gap-4'>
                  <IoDocumentSharp className='text-8xl' />
                  <p className='text-4xl'>KYC Approved</p>
                </div>
              )}
          </Layout>
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default KycDocumentUpload;
