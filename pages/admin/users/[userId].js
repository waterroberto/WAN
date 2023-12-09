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

    if (+amount >= 0) {
      if (userData) {
        const ref = doc(db, 'users', userData?.id);

        cogoToast.loading('Setting balance...');

        await updateDoc(ref, {
          [balanceType]: +amount,
        })
          .then(() => {
            cogoToast.success(`${balanceType} updated succesfully.`);

            setModalOpen(false);
            setAmount('');
          })
          .catch((err) => {
            cogoToast.error('Error');
            console.log(err);
          });
      }
    } else cogoToast.error('Amount must be 0 or more');
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
          <Box mt={8}>
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
              title={`SET NEW ${balanceType.toUpperCase()} VALUE`}
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
                <Grid item xs={12} sm={6} md={4} width='100%'>
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
            </Container>
            {/*  */}
            <Container>
              <button
                className='w-full btn p-4 bg-yellow-500 text-white uppercase rounded-md'
                onClick={handleOpen3}
              >
                Add new transaction
              </button>
            </Container>

            {/*  */}
            <Container>
              <p className='mb-8 text-gray-300'>ACCOUNT DETAILS</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 my-4 text-gray-400'>
                <div>
                  <p className='text-gray-200 uppercase text-[12px] mb-2'>
                    Deposit Balance
                  </p>
                  <p className='font-bold text-2xl'>
                    £{userData.depositBalance.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className='text-gray-200 uppercase text-[12px] mb-2'>
                    Income Balance
                  </p>
                  <p className='font-bold text-2xl'>
                    £{userData.incomeBalance.toLocaleString()}
                  </p>
                </div>
              </div>
            </Container>
            <Container>
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
              <Typography
                fontWeight={800}
                fontSize={20}
                mb={4}
                sx={{ color: 'var(--mid)' }}
              >
                User Details
              </Typography>
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
            </Container>
            <Container>
              <Typography
                fontWeight={800}
                fontSize={20}
                mb={4}
                sx={{ color: 'var(--mid)' }}
              >
                Documents
              </Typography>
              {!userData?.documents.ID && !userData?.documents.passport && (
                <Typography
                  fontWeight={300}
                  fontSize={32}
                  mb={4}
                  textAlign='center'
                  sx={{ color: 'var(--mid)' }}
                >
                  No Documents
                </Typography>
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
                {userData?.documents.ID && (
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
                )}
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
            />

            <Container>
              <Stack gap={4} direction={{ xs: 'column', sm: 'row' }}>
                <Button
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
                </Button>
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
                  onClick={() => {}}
                >
                  Delete User
                </Button>
              </Stack>
            </Container>
          </Layout>
        )}
      </Box>
      <AdminMobileNav />
    </AdminRoute>
  );
};

export default UserDetails;
