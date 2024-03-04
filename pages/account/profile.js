import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import { sendEmailVerification } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiCreditCard, BiSolidFileImport } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import capitec from '../../assets/banks/capitec.jpg';
import fnb from '../../assets/banks/fnb.png';
import nedbank from '../../assets/banks/nedbank.png';
import standardBank from '../../assets/banks/standard-bank.png';
import { Dash, Layout, Meta, MobileNav, Sidebar } from '../../components';
import PopupModal from '../../components/Global/Modal';
import PrivateRoute from '../../components/auth/PrivateRoute';
import AppBar from '../../components/dashboard/AppBar';
import Container from '../../components/dashboard/Container';
import ReferralCard from '../../components/dashboard/ReferralCard';
import userDataContext from '../../context/UserDataContext';
import { AuthService } from '../../services/auth';
import { auth, db } from '../../services/firebase.config';
import { UserService } from '../../services/user';
import parseDate from '../../utils/parseDate';
import { stringAvatar } from '../../utils/stringAvatar';

const Profile = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [documentData, setDocumentData] = useState({
    documentType: '',
    documentFile: '',
  });

  const { documentType, documentFile } = documentData;
  const { userData } = useContext(userDataContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const addDocument = (e) => {
    setDocumentData((prev) => ({
      ...prev,
      documentType: e.target?.files[0]?.type,
      documentFile: e.target?.files[0],
    }));
  };

  const handleDocumentUpload = async () => {
    const documentIsValid =
      documentType === 'image/jpeg' ||
      documentType === 'image/jpg' ||
      documentType === 'image/png';

    if (documentIsValid) {
      try {
        setIsLoading(true);
        const url = await UserService.uploadUserSelfie(
          userData?.id,
          `${userData.firstName} ${userData.lastName}`,
          documentFile
        );

        if (url) {
          const userRef = doc(db, 'users', userData?.id);
          const userDoc = await getDoc(userRef);

          const userDocuments = userDoc.data().documents;

          await updateDoc(userRef, {
            documents: {
              ...userDocuments,
              passport: url,
            },
          });

          cogoToast.success('Successful');
          cogoToast.info(
            'Your document will be reviewed before account upgrade.'
          );
          setDocumentData({ documentFile: '', documentType: '' });
          handleClose();

          // TODO - Update admin to increase account Tier
        }

        setIsLoading(false);
        console.log(url);
      } catch (error) {
        setIsLoading(false);
        cogoToast.error('Something went wrong');
        console.log(error);
      }
    }
  };

  const sendVerificationEmail = async () => {
    console.log('Verification email has been sent');

    cogoToast.info('You will receive a verification email.');

    await sendEmailVerification(auth.currentUser);

    cogoToast.success('Verification email has been sent');
  };

  return (
    <PrivateRoute>
      <Meta
        title='WAN Cooperation Bank Finance - Profile - Online Bank'
        description='WAN Cooperation Bank Financial Bank | Profile into your account'
      />
      <Dash />

      <PopupModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        title='INCREASE ACCOUNT LEVEL'
        sx={{ maxWidth: '640px' }}
      >
        <Typography my={2} fontWeight={700}>
          {userData?.accountLevel === 1
            ? 'Upload Selfie Of Yourself'
            : userData?.accountLevel === 2
            ? 'Upload Valid Passport or ID'
            : 'Upload ID or Passport Document'}
        </Typography>

        {documentFile && (
          <img
            alt={documentFile?.name}
            src={URL.createObjectURL(documentFile)}
            style={{
              margin: 'auto',
              maxWidth: '100%',
              backgroundPosition: 'center',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        )}

        <Button
          disableElevation
          sx={{
            mt: 2,
            p: 1,
            color: '#fff',
            textTransform: 'capitalize',
            border: documentFile
              ? '1px solid var(--blue)'
              : '1px solid var(--secondary)',

            '&:hover': {
              border: documentFile
                ? '1px solid var(--blue-hover)'
                : '1px solid var(--secondary-clicked)',
            },
            width: '100%',
          }}
          component='label'
        >
          {documentFile ? 'Change Image - ' : 'Select Image'}{' '}
          {documentFile && documentFile.name}
          <input
            hidden
            accept='.png, .jpg, .jpeg'
            type='file'
            onChange={addDocument}
            max={1}
          />
        </Button>
        {documentFile && (
          <Button
            disableElevation
            sx={{
              mt: 2,
              p: 2,
              color: '#fff',
              background: 'var(--green)',

              '&:hover': {
                background: 'var(--green-hover)',
              },
              '&:disabled': {
                color: '#fff',
                background: 'var(--green-hover)',
              },
              width: '100%',
            }}
            onClick={handleDocumentUpload}
            disabled={isLoading}
          >
            {isLoading ? 'Sending document...' : 'Upload Document'}
          </Button>
        )}
      </PopupModal>
      <Box minHeight='100vh' sx={{ background: 'var(--mid)' }}>
        <Sidebar>
          <Layout>
            <AppBar page='Profile' />
            <Stack
              p={2}
              direction='row'
              alignItems='center'
              gap={2}
              sx={{
                background: userData?.isVerified
                  ? 'var(--green-light)'
                  : 'var(--red)',
                color: '#fff',
                borderRadius: 1.5,
                mb: 2,
                maxWidth: '1024px',
                mx: 'auto',
              }}
            >
              {userData?.isVerified ? <AiFillCheckCircle /> : <MdCancel />}
              <Typography fontWeight={600}>
                {userData?.isVerified
                  ? 'Email is Verified'
                  : 'Unverified Email'}
              </Typography>
            </Stack>
            <Container>
              <div className='text-gray-700'>
                <Grid
                  container
                  mx='auto'
                  rowSpacing={{ xs: 4, sm: 6 }}
                  columnSpacing={{ sm: 4, md: 8 }}
                  columns={12}
                  alignItems='center'
                >
                  <Grid item xs={12} sm={6} md={4} width='100%'>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      alignItems={{ xs: 'flex-start', sm: 'center' }}
                      gap={4}
                    >
                      <Avatar
                        {...stringAvatar(
                          `${userData?.firstName?.toUpperCase()} ${userData?.lastName?.toUpperCase()}`
                        )}
                        src={userData?.documents?.passport}
                        sx={{
                          width: 120,
                          height: 120,
                          border: '4px solid var(--blue)',
                        }}
                      />
                      <Box>
                        <Typography fontWeight={800} fontSize={20}>
                          {userData?.firstName.toUpperCase()}{' '}
                          {userData?.lastName.toUpperCase()}
                        </Typography>
                        <Typography fontSize={16} fontWeight={300}>
                          {userData?.email}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} width='100%'>
                    <Typography fontWeight={800} fontSize={20}>
                      Account Tier
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      Level {userData?.accountLevel}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} width='100%'>
                    <Typography fontWeight={800} fontSize={20}>
                      Member Since
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {parseDate(userData?.timeStamp?.seconds * 1000)}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Container>
            {/* <Container>
            <Typography fontWeight={800} fontSize={20} mb={4}>
              Account Tokenization
            </Typography>
            <Button
              variant='text'
              disableElevation
              sx={{
                p: 2,
                color: '#fff',
                background: 'var(--green)',
                transition: '0.5s ease-in',
                borderRadius: 2,

                '&:hover': {
                  transition: '0.5s ease-out',
                  background: 'var(--green-hover)',
                },
                width: '100%',
              }}
              onClick={handleOpen2}
            >
              Tokenize Account
            </Button>
          </Container> */}
            {(userData?.accountLevel < 3 || !userData?.isVerified) && (
              <Container>
                <Typography
                  fontWeight={800}
                  fontSize={20}
                  mb={4}
                  sx={{ color: 'var(--dark)' }}
                >
                  Account Verification
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems='center'
                  justifyContent='flex-start'
                  gap={2}
                  width='100%'
                >
                  {!userData?.isVerified && (
                    <Button
                      variant='text'
                      disableElevation
                      sx={{
                        p: 2,
                        color: '#fff',
                        textTransform: 'capitalize',
                        fontWeight: 500,
                        fontFamily: 'inherit',
                        background: 'var(--light-blue)',
                        transition: '0.5s ease-in',
                        borderRadius: 2,

                        '&:hover': {
                          transition: '0.5s ease-out',
                          background: 'var(--blue)',
                        },
                        width: '100%',
                      }}
                      onClick={sendVerificationEmail}
                    >
                      Verify Email
                    </Button>
                  )}
                  {userData?.accountLevel !== 3 && (
                    <Button
                      variant='text'
                      disableElevation
                      sx={{
                        p: 2,
                        color: '#fff',
                        textTransform: 'capitalize',
                        fontWeight: 500,
                        fontFamily: 'inherit',
                        background: 'var(--secondary)',
                        transition: '0.5s ease-in',
                        borderRadius: 2,

                        '&:hover': {
                          transition: '0.5s ease-out',
                          background: 'var(--secondary-clicked)',
                        },
                        width: '100%',
                      }}
                      onClick={handleOpen}
                    >
                      Upgrade to Tier {userData?.accountLevel + 1}
                    </Button>
                  )}
                </Stack>
              </Container>
            )}
            <Container>
              <Link
                href='/account/kyc'
                type='button'
                className='block w-full p-6 pb-16 rounded-3xl bg-secondary text-gray-50 relative'
              >
                <p className='text-2xl font-extrabold'>KYC Verification</p>
                <span className='absolute bottom-6 right-6 text-3xl'>
                  <BiSolidFileImport />
                </span>
              </Link>
            </Container>
            <Container>
              <div className='text-gray-700'>
                <Typography fontWeight={800} fontSize={20} mb={4}>
                  Other Information
                </Typography>
                <Grid
                  container
                  mx='auto'
                  rowSpacing={{ xs: 4, sm: 6 }}
                  columnSpacing={{ sm: 4, md: 8 }}
                  columns={12}
                  alignItems='center'
                >
                  <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                    <Typography fontWeight={300} fontSize={12} mb={0.5}>
                      FULL NAME
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      textTransform='capitalize'
                    >
                      {userData?.firstName} {userData?.lastName}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                    <Typography fontWeight={300} fontSize={12} mb={0.5}>
                      PHONE NUMBER
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      textTransform='capitalize'
                    >
                      {userData?.phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} width='100%'>
                    <Typography fontWeight={300} fontSize={12} mb={0.5}>
                      EMAIL
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      textTransform='lowercase'
                    >
                      {userData?.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                    <Typography fontWeight={300} fontSize={12} mb={0.5}>
                      GENDER
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      textTransform='capitalize'
                    >
                      {userData?.gender}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                    <Typography fontWeight={300} fontSize={12} mb={0.5}>
                      COUNTRY
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      textTransform='capitalize'
                    >
                      {userData?.country}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                    <Typography fontWeight={300} fontSize={12} mb={0.5}>
                      ZIP CODE
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      textTransform='capitalize'
                    >
                      {userData?.zipcode}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                    <Typography fontWeight={300} fontSize={12} mb={0.5}>
                      DATE OF BIRTH
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      textTransform='capitalize'
                    >
                      {parseDate(userData?.DOB?.seconds * 1000)}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Container>
            <>
              <PopupModal
                open={open2}
                handleClose={handleClose2}
                handleOpen={handleOpen2}
                title='SELECT YOUR BANK'
                sx={{ maxWidth: '768px' }}
              >
                <Grid
                  container
                  mx='auto'
                  columns={12}
                  alignItems='center'
                  sx={{
                    '& div': {
                      background: '#fff',
                      p: 1,
                      borderRadius: 2,
                      // width: "100%",
                      border: '4px solid var(--dark)',
                    },
                    '& img': {
                      display: 'block',
                      margin: 'auto',
                    },
                  }}
                >
                  <Grid item xs={6} sm={6} md={3}>
                    <Link href='/account/tokenize/capitec'>
                      <Image
                        src={capitec}
                        alt='Capitec logo'
                        style={{
                          width: '100px',
                          height: '100px',
                        }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3}>
                    <Link href='/account/tokenize/fnb'>
                      <Image
                        src={fnb}
                        alt='fnb logo'
                        style={{
                          width: '100px',
                          height: '100px',
                        }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3}>
                    <Link href='/account/tokenize/nedbank'>
                      <Image
                        src={nedbank}
                        alt='nedbank logo'
                        style={{
                          width: '100px',
                          height: '100px',
                        }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3}>
                    <Link href='/account/tokenize/standard-bank'>
                      <Image
                        src={standardBank}
                        alt='standard bank logo'
                        style={{
                          width: '100px',
                          height: '100px',
                        }}
                      />
                    </Link>
                  </Grid>
                </Grid>
              </PopupModal>
            </>
            <Container>
              <Button
                variant='text'
                disableElevation
                sx={{
                  p: 2,
                  color: '#fff',
                  background: 'var(--red)',
                  borderRadius: 2,

                  '&:hover': {
                    background: 'var(--red-hover)',
                  },
                  width: '100%',
                }}
                onClick={() => {
                  AuthService.logout();
                  router.replace('/');
                }}
              >
                Logout
              </Button>
            </Container>
            <MobileNav />
          </Layout>
        </Sidebar>
      </Box>
    </PrivateRoute>
  );
};

export default Profile;
