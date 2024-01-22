import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Layout, Meta } from '../../../components';
import PopupModal from '../../../components/Global/Modal';
import Progress from '../../../components/Global/Progress';
import AdminMobileNav from '../../../components/admin/AdminMobileNav';
import Nav from '../../../components/admin/Nav';
import AdminRoute from '../../../components/auth/AdminRoute';
import Container from '../../../components/dashboard/Container';
import LoanHistory from '../../../components/dashboard/Loan/LoanHistory';
import TransactionHistory from '../../../components/dashboard/UserDetails/TransactionHistory';

import { db } from '../../../services/firebase.config';
import { UserService } from '../../../services/user';
import parseDate from '../../../utils/parseDate';
import { stringAvatar } from '../../../utils/stringAvatar';

const UserDetails = () => {
  const router = useRouter();
  const userId = router.query?.userId;

  const [amount, setAmount] = useState('');
  const [userData, setUserData] = useState(null);

  const [open2, setOpen2] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);

  const [balanceType, setBalanceType] = useState('');

  const [depositDate, setDepositDate] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [depositStatus, setDepositStatus] = useState('pending');
  const [depositMethod, setDepositMethod] = useState('local bank');
  const [depositLoading, setDepositLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let unsub = () => {};
    try {
      const ref = doc(db, 'users', userId);
      unsub = onSnapshot(ref, (doc) => {
        setUserData(doc.data());
      });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      cogoToast.error('Error fetching user data');
    }

    return () => {
      unsub();
    };
  }, [userId]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleOpen3 = () => setModal3Open(true);
  const handleClose3 = () => setModal3Open(false);

  const upgradeUserAccount = async () => {
    try {
      setIsUpgrading(true);
      const ref = doc(db, 'users', userId);
      const userDoc = await getDoc(ref);

      const level = userDoc.data().accountLevel;

      await updateDoc(ref, {
        accountLevel: level + 1,
      });
      cogoToast.success('Upgrade successful');
      setIsUpgrading(false);
    } catch (error) {
      setIsUpgrading(false);
      console.log(error);
      cogoToast.error('Error fetching user data');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      type: 'deposit',
      amount: +amount,
      method: 'bank',
      date: new Date(),
      status: 'approved',
    };

    if (+amount > 0) {
      if (userData) {
        cogoToast.loading('Setting balance...');

        const ref = doc(db, 'users', userData?.id);
        const _ = await getDoc(ref);

        await updateDoc(ref, {
          [balanceType]: _.data()[balanceType] + +amount,
        })
          .then(() => {
            UserService.sendDepositRequest(userData?.id, data).then(() => {
              cogoToast.success(`Account top up succesfully.`);
              setModalOpen(false);

              setAmount('');
            });
          })
          .catch((err) => {
            cogoToast.error('Error');
            console.log(err);
          });
      }
    } else cogoToast.error('Amount must be more than 0.00');
  };

  const handleSetWithdrawLimit = async (e) => {
    e.preventDefault();

    if (+amount > 0) {
      if (userData) {
        cogoToast.loading('Loading...');

        const ref = doc(db, 'users', userData?.id);

        await updateDoc(ref, {
          withdrawLimit: +amount,
        })
          .then(() => {
            cogoToast.success(`Succesful.`);
            setModal4Open(false);

            setAmount('');
          })
          .catch((err) => {
            cogoToast.error('Error');
            console.log(err);
          });
      }
    } else cogoToast.error('Amount must be more than 0.00');
  };

  const fundUserAccount = (bal) => {
    // if (data) {
    setBalanceType(bal);
    // }

    setModalOpen(true);
  };

  const addNewTransaction = async () => {
    const data = {
      type: 'deposit',
      amount: +depositAmount,
      method: depositMethod,
      date: new Date(depositDate),
      status: depositStatus,
    };

    // jerroldhartzog25490@gmail.com
    // Osomsky1224@,.

    if (+depositAmount > 0) {
      setDepositLoading(true);
      try {
        if (data)
          await UserService.sendDepositRequest(userData.id, data).then(() => {
            cogoToast.success('Transaction Created.');
            handleClose3();

            setDepositAmount('');
            setDepositMethod('');
          });

        setDepositLoading(false);
      } catch (err) {
        console.log(err);
        cogoToast.error('Error! Cannot perform this action at the moment');
        setDepositLoading(false);
      }
    } else cogoToast.error('Please input valid amount.');
  };

  const handleClick = async () => {
    try {
      cogoToast.loading('Deleting user...');
      const res = await fetch('/api/firebase-admin', {
        method: 'POST',
        body: JSON.stringify({ uid: userData?.id }),
      });

      const data = await res.json();

      cogoToast.success('User deleted successfully');
      router.replace('/admin');
    } catch (error) {
      cogoToast.success('Error deleting user');
      console.error('Error fetching data:', error);
    }
  };

  const handleProcessKyc = async (status) => {
    console.log(status);

    if (userData) {
      cogoToast.loading('Loading...');

      const ref = doc(db, 'users', userData?.id);

      await updateDoc(ref, {
        kyc_approved: status,
        kyc_pending: false,
        // accountLevel: 3,
      })
        .then(() => {
          // Mail them
          cogoToast.success(`Succesful.`);
        })
        .catch((err) => {
          cogoToast.error('Error performing this action');
          console.log(err);
        });
    }
  };

  return (
    <AdminRoute>
      <Meta title='Admin Portal' description='Admin Portal' />
      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Nav />

        {isLoading && !userData && (
          <Box mt={8}>
            <Layout>
              <Container>
                <Progress />
              </Container>
            </Layout>
          </Box>
        )}
        {!isLoading && !userData && (
          <Box mt={8} sx={{ color: '#333' }}>
            <Layout>
              <Container>
                <Typography
                  fontSize={32}
                  sx={{
                    color: 'var(--mid)',
                  }}
                >
                  Cannot fetch details
                </Typography>
              </Container>
            </Layout>
          </Box>
        )}
        {!isLoading && userData && (
          <Layout>
            {/*  */}
            <PopupModal
              open={modal3Open}
              handleClose={handleClose3}
              handleOpen={handleOpen3}
              title='add new transaction to deposit history'
              sx={{ maxWidth: '512px' }}
            >
              <div className='my-6'>
                <label htmlFor='amount' className='text-sm text-gray-300 mb-2'>
                  Transcation Amount
                </label>
                <input
                  type='number'
                  id='amount'
                  className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
                  onChange={(e) => {
                    setDepositAmount(e.target.value);
                  }}
                  required
                />
              </div>
              {/*  */}
              <div className='my-6'>
                <label htmlFor='date' className='text-sm text-gray-300 mb-2'>
                  Transaction Date
                </label>
                <input
                  className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
                  placeholder='Transaction Date'
                  type='date'
                  required
                  id='date'
                  onChange={(e) => {
                    setDepositDate(e.target.value);
                  }}
                />
              </div>
              {/*  */}

              <div className='my-6'>
                <label htmlFor='status' className='text-sm text-gray-300 mb-2'>
                  Transaction Status
                </label>
                <select
                  name='status'
                  id='status'
                  className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
                  onChange={(e) => {
                    // setDepositStatus(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value='approved' defaultChecked>
                    Approved
                  </option>
                  <option value='pending'>Pending</option>
                  <option value='declined'>Declined</option>
                </select>
              </div>
              {/*  */}
              <div className='my-6'>
                <label htmlFor='method' className='text-sm text-gray-300 mb-2'>
                  Deposit Method
                </label>
                <select
                  name='method'
                  id='method'
                  className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
                  onChange={(e) => {
                    setDepositMethod(e.target.value);
                  }}
                >
                  <option value='crypto' defaultChecked>
                    Crypto
                  </option>
                  <option value='local bank'>Local Bank</option>
                  <option value='paypal'>PayPal</option>
                  <option value='skrill'>Skrill</option>
                </select>
              </div>

              <button
                type='submit'
                className='px-16 rounded-md bg-primary mt-4 py-4 text-white'
                onClick={addNewTransaction}
              >
                {depositLoading ? 'Loading...' : 'SUBMIT'}
              </button>
              {/*  */}
            </PopupModal>

            {/*  */}
            <PopupModal
              title={`TOP UP ACCOUNT`}
              open={modalOpen}
              handleClose={handleClose}
              handleOpen={handleOpen}
              sx={{ maxWidth: '768px' }}
            >
              <form onSubmit={handleSubmit}>
                <div className='w-full col-span-1'>
                  <label
                    htmlFor='amount'
                    className='mb-2 font-semibold text-sm text-gray-400'
                  >
                    Input New Balance*
                  </label>
                  <input
                    type='number'
                    id='amount'
                    placeholder='Input New Balance'
                    className='p-6 outline-none border-none w-full rounded-md text-gray-400 bg-gray-900'
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className='flex items-center justify-end'>
                  <button
                    type='submit'
                    className='px-16 rounded-md bg-primary mt-4 py-4 text-white hover:bg-blue-700'
                  >
                    Set Balance
                  </button>
                </div>
              </form>
            </PopupModal>
            <Box my={8} sx={{ color: 'var(--mid)' }}>
              User Details
            </Box>

            <Container>
              <Grid
                container
                mx='auto'
                rowSpacing={{ xs: 4, sm: 6 }}
                columnSpacing={{ sm: 4, md: 8 }}
                columns={12}
                alignItems='center'
                sx={{ color: 'var(--mid)' }}
              >
                <Grid item xs={12} sm={6} width='100%'>
                  <Stack direction='row' alignItems='center' gap={4}>
                    <Avatar
                      {...stringAvatar(
                        `${userData?.firstName.toUpperCase()} ${userData?.lastName.toUpperCase()}`
                      )}
                      src={userData?.documents?.passport}
                      sx={{
                        width: 120,
                        height: 120,
                        border: '4px solid var(--pale-blue)',
                      }}
                    />
                    <Box>
                      <div>
                        <p className='text-gray-700 uppercase text-[12px] mb-2'>
                          {userData?.firstName.toUpperCase()}{' '}
                          {userData?.lastName.toUpperCase()}
                        </p>
                        <p className='text-gray-800 font-bold text-xl'>
                          {userData?.email}
                        </p>
                      </div>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      Account Number
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      {userData?.accountNumber}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      Account Tier
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      Level {userData?.accountLevel}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      Member Since
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      {parseDate(userData?.timeStamp?.seconds * 1000)}
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Container>
            {/*  */}
            <Container>
              <button
                className='w-full btn p-4 bg-primary text-white uppercase rounded-md'
                onClick={handleOpen3}
              >
                Populate Deposit History
              </button>
            </Container>

            {/*  */}
            <Container>
              <p className='mb-8 text-gray-700'>ACCOUNT DETAILS</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 my-4 text-gray-400'>
                <div>
                  <p className='text-gray-700 uppercase text-[12px] mb-2'>
                    Deposit Balance
                  </p>
                  <p className='text-gray-800 font-bold text-2xl'>
                    {userData.currency ?? '€'}
                    {userData.depositBalance.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className='text-gray-700 uppercase text-[12px] mb-2'>
                    Income Balance
                  </p>
                  <p className='text-gray-800 font-bold text-2xl'>
                    {userData.currency ?? '€'}
                    {userData.incomeBalance.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className='text-gray-700 uppercase text-[12px] mb-2'>
                    Withdrawal Limit
                  </p>
                  <p className='text-gray-800 font-bold text-2xl'>
                    {userData.currency &&
                      userData.withdrawLimit &&
                      userData.currency}

                    {userData.withdrawLimit
                      ? userData.withdrawLimit.toLocaleString()
                      : 'Not set'}
                  </p>
                </div>
              </div>
            </Container>

            {/*  */}

            {/* <Container>
              <div className='grid grid-cols-2 gap-4'>
                <button
                  className='btn p-4 bg-primary text-white uppercase rounded-md'
                  onClick={() => fundUserAccount('depositBalance')}
                >
                  Set Deposit Balance
                </button>
                <button
                  className='btn p-4 bg-secondary text-white uppercase rounded-md'
                  onClick={() => fundUserAccount('incomeBalance')}
                >
                  Set Income Balance
                </button>
              </div>
            </Container> */}

            {/*  */}

            <Container>
              <button
                className='btn p-4 w-full bg-green-500 text-white uppercase rounded-md'
                onClick={() => fundUserAccount('depositBalance')}
              >
                Top Up Account
              </button>
              <button
                className='btn my-4 p-4 w-full bg-primary text-white uppercase rounded-md'
                onClick={() => setModal4Open(true)}
              >
                Set Withdrawal Limit
              </button>
            </Container>
            {userData?.accountLevel !== 3 && (
              <Container>
                <Box my={4}>
                  <Button
                    disableElevation
                    sx={{
                      p: 2,
                      color: '#fff',
                      background:
                        userData?.accountLevel === 1
                          ? 'var(--secondary)'
                          : 'var(--green)',

                      '&:hover': {
                        background:
                          userData?.accountLevel === 1
                            ? 'var(--secondary-clicked)'
                            : 'var(--green-hover)',
                      },
                      width: '100%',
                    }}
                    onClick={upgradeUserAccount}
                  >
                    {isUpgrading
                      ? 'Upgrading...'
                      : `Upgrade to Tier ${userData?.accountLevel + 1}`}
                  </Button>
                </Box>
              </Container>
            )}

            <Container>
              <p className='mb-8 text-gray-800 font-bold text-2xl'>
                USER DETAILS
              </p>

              <Grid
                container
                mx='auto'
                rowSpacing={{ xs: 4, sm: 6 }}
                columnSpacing={{ sm: 4, md: 8 }}
                columns={12}
                alignItems='center'
                sx={{ color: 'var(--mid)' }}
              >
                <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      Full Name
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      {userData?.firstName} {userData?.lastName}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      PHONE NUMBER
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      {userData?.phone}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      Email
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      {userData?.email}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      Gender
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      {userData?.gender}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      Country
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      {userData?.country}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      ZIP CODE
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      {userData?.zipcode}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3} width='100%'>
                  <div>
                    <p className='text-gray-700 uppercase text-[12px] mb-2'>
                      DATE OF BIRTH
                    </p>
                    <p className='text-gray-800 font-bold text-xl'>
                      {parseDate(userData?.DOB?.seconds * 1000)}
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Container>
            <Container>
              {!userData?.documents.ID &&
                !userData?.documents.passport &&
                !userData?.kyc_documents && (
                  <p className='text-gray-700 font-light text-3xl text-center p-8'>
                    No Documents
                  </p>
                )}
              <Grid
                container
                mx='auto'
                columns={12}
                alignItems='center'
                sx={{ color: 'var(--mid)' }}
              >
                {userData?.documents.passport && (
                  <Grid item xs={12} sm={12} lg={6} width='100%' mx='auto'>
                    <Box my={4} px={2}>
                      <Typography fontWeight={600} fontSize={20} mb={4}>
                        Selfie
                      </Typography>
                      <img
                        src={userData?.documents?.passport}
                        width={500}
                        height={500}
                        style={{ width: '100%' }}
                      />
                    </Box>
                  </Grid>
                )}
                {userData.kyc_documents && (
                  <div>
                    <p className='text-lg font-extrabold mb-8 text-gray-700'>
                      KYC Documents
                    </p>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                      {userData.kyc_documents.map((document) => (
                        <img
                          key={document}
                          src={document}
                          alt={userData.id}
                          className='w-full'
                        />
                      ))}
                    </div>

                    {/*  */}
                    {!userData?.kyc_approved && (
                      <div className='mt-8 flex items-center justify-center gap-8 max-w-md mx-auto'>
                        <button
                          className='p-4 bg-green-500 rounded-md text-white block w-full'
                          onClick={() => handleProcessKyc(true)}
                        >
                          Approve
                        </button>
                        <button
                          className='p-4 bg-red-600 rounded-md text-white block w-full'
                          onClick={() => handleProcessKyc(false)}
                        >
                          Decline
                        </button>
                      </div>
                    )}
                  </div>
                )}
                {/* {userData?.documents.ID && (
                  <Grid item xs={12} sm={12} lg={6} mx='auto'>
                    <Box my={4} px={2}>
                      <Typography fontWeight={600} fontSize={20} mb={4}>
                        ID/Passport
                      </Typography>
                      <img
                        src={userData?.documents?.ID}
                        width={500}
                        height={500}
                        style={{ width: '100%' }}
                      />
                    </Box>
                  </Grid>
                )} */}
              </Grid>
            </Container>
            {userData?.loans && userData?.loans.length > 0 && (
              <Container>
                <Typography
                  fontSize={24}
                  fontWeight={600}
                  sx={{
                    color: 'var(--mid)',
                  }}
                  mb={2}
                >
                  Loan History
                </Typography>
                <LoanHistory
                  transactions={userData?.loans}
                  currency={userData?.currency}
                  modalOpen={open2}
                  handleModalClose={handleClose2}
                  handleModalOpen={handleOpen2}
                />
              </Container>
            )}
            <Typography
              fontSize={24}
              fontWeight={600}
              sx={{
                color: 'var(--mid)',
              }}
              mb={2}
            >
              Transaction History
            </Typography>

            <TransactionHistory
              userId={userData?.id}
              transactions={[...userData?.deposits, ...userData?.withdrawals]}
              isAdmin={true}
              currency={userData.currency}
            />

            <Container>
              <Stack gap={4} direction={{ xs: 'column', sm: 'row' }}>
                {/* <Button
                  disableElevation
                  sx={{
                    color: 'var(--mid)',
                    border: '1px solid var(--secondary)',

                    '&:hover': {
                      border: '1px solid var(--secondary-clicked)',
                    },
                    width: '100%',
                  }}
                  onClick={() => {}}
                >
                  Disable User
                </Button> */}
                <Button
                  disableElevation
                  sx={{
                    color: 'var(--mid)',
                    background: 'var(--red)',

                    '&:hover': {
                      background: 'var(--red-hover)',
                    },
                    width: '100%',
                  }}
                  onClick={() => {
                    if (
                      confirm(
                        'Are you sure you want to delete this account? This action cannot be undone.'
                      )
                    )
                      handleClick();
                    else return;
                  }}
                >
                  Delete User
                </Button>
              </Stack>
            </Container>

            {/*  */}
            <PopupModal
              title={`Set withdrawal limit`}
              open={modal4Open}
              handleClose={() => setModal4Open(false)}
              handleOpen={() => setModal4Open(true)}
              sx={{ maxWidth: '768px' }}
            >
              <form onSubmit={handleSetWithdrawLimit}>
                <div className='w-full col-span-1'>
                  <label
                    htmlFor='amount'
                    className='mb-2 font-semibold text-sm text-gray-400'
                  >
                    Input Withdrawal Limit*
                  </label>
                  <input
                    type='number'
                    id='amount'
                    placeholder='Withdrawal Limit'
                    className='p-6 outline-none border-none w-full rounded-md text-gray-400 bg-gray-900'
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  className='px-16 rounded-md bg-orange-500 mt-4 py-4 text-white hover:bg-orange-600'
                >
                  Submit
                </button>
              </form>
            </PopupModal>
          </Layout>
        )}
      </Box>
      <AdminMobileNav />
    </AdminRoute>
  );
};

export default UserDetails;
