import { Box, useTheme } from '@mui/material';
import cogoToast from 'cogo-toast';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { BsCurrencyDollar, BsLightningChargeFill } from 'react-icons/bs';
import { MdOutlineTrendingUp } from 'react-icons/md';
import { Dash, Layout, Meta, MobileNav, Sidebar } from '../../components';
import PopupModal from '../../components/Global/Modal';
import PrivateRoute from '../../components/auth/PrivateRoute';
import AppBar from '../../components/dashboard/AppBar';
import Container from '../../components/dashboard/Container';

import userDataContext from '../../context/UserDataContext';
import { db } from '../../services/firebase.config';

import VerifyAccount from '../../components/dashboard/VerifyAccount';
import { generateCreditCardNumber } from '../../utils/creditCard';

export const virtual_cards = [
  {
    type: 'visa',
    name: 'visa',
    creation_fee: 60,
    limit: 4500,
    image: require('../../public/card-1.svg'),
  },
  {
    type: 'mastercard',
    name: 'masterCard',
    creation_fee: 100,
    limit: 15000,
    image: require('../../public/card-2.svg'),
  },
];

const Cards = () => {
  const { palette } = useTheme();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const [amount, setAmount] = useState('');
  const [asset, setAsset] = useState('depositBalance');

  const { userData } = useContext(userDataContext);

  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    setAsset('depositBalance');
  };

  const getVirtualCard = (card) => {
    setCurrentCard(card);
    handleOpen();
  };

  const processVirtualCard = async () => {
    const card_creation_fee = currentCard?.creation_fee;

    // if (card_creation_fee) {
    const selectedBalance = userData[asset];

    // if (selectedBalance > card_creation_fee) {
    const card_data = {
      card_name: currentCard?.name,
      card_creation_fee,
      user_email: userData?.email,
      user_name: `${userData?.firstName} ${userData?.lastName}`,
      user_id: userData?.id,
      date: new Date().toLocaleDateString(),
      //
      card_number: generateCreditCardNumber(),
      exp_date: `${new Date().getUTCMonth() + 1}-${new Date().getDate()}-${
        new Date().getUTCFullYear() + 1
      }`,
      cvv: 308,
      status: 'pending',
    };

    try {
      cogoToast.loading('Processing Card...');

      const userRef = doc(db, 'users', userData?.id);

      await addDoc(collection(db, 'cards'), card_data);

      await updateDoc(userRef, { card: card_data, cardBalance: 0 });

      cogoToast.success(
        'Card processed successfully. Contact admin to activate the card.'
      );

      handleClose();
    } catch (error) {
      console.log(error);
      cogoToast.error('Error processing card');
    }
    // } else {
    //   cogoToast.error('Insufficient Funds');
    // }
    // }
  };

  const processCardTopup = async () => {
    const sufficientFunds = +amount <= userData[asset];

    if (sufficientFunds) {
      const userRef = doc(db, 'users', userData?.id);

      try {
        cogoToast.loading('Loading, please wait...');
        const res = await getDoc(userRef);
        const data = res.data();

        const card_balance = data?.cardBalance ?? 0;

        await updateDoc(userRef, {
          [asset]: userData[asset] - +amount,
          cardBalance: card_balance + +amount,
        });

        setModalOpen2(false);
        setAsset('depositBalance');

        cogoToast.success('Card successfully funded.');
      } catch (error) {
        console.log(error);
        cogoToast.error('Cannot fund card at this moment');
      }
    } else {
      cogoToast.error('Insufficient Funds');
    }
  };

  return (
    <PrivateRoute>
      <Meta
        title='WAN Cooperation Finance - Virtual Card - Online Bank'
        description='WAN Cooperation Finance | Virtual Card'
      />
      <Dash />

      {/* <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}> */}
      <Box minHeight='100vh'>
        <Sidebar>
          <Layout>
            <AppBar page='Virtual Cards' />
            <VerifyAccount />
            <PopupModal
              handleClose={handleClose}
              open={modalOpen}
              title='Claim Your WAN Cooperation Finance Card'
            >
              <div className='mb-4'>
                <p className='font-light'>
                  There is a fee of ${currentCard?.creation_fee} to create this
                  card. <br /> After card creation, contact admin for
                  activation.
                </p>
              </div>
              {/*  */}
              <Image
                src={currentCard?.image}
                className='w-full'
                alt='WAN Cooperation Finance bank virtual card'
              />
              {/*  */}
              {/* <div className='my-6'>
              <label
                htmlFor='balanceType'
                className='text-sm text-gray-300 mb-2'
              >
                Pay From:
              </label>
              <select
                name='balanceType'
                id='balanceType'
                className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
                onChange={(e) => setAsset(e.target.value.trim())}
              >
                <option value='depositBalance' defaultChecked>
                  Deposit Balance ( ${userData?.depositBalance.toLocaleString()}
                  )
                </option>
                <option value='incomeBalance'>
                  Income Balance ( ${userData?.incomeBalance.toLocaleString()})
                </option>
              </select>
            </div> */}
              <button
                className='mt-2 py-2 px-8 w-full bg-primary text-center rounded-md text-sm text-white'
                onClick={() => processVirtualCard()}
              >
                Proceed
              </button>
            </PopupModal>
            {/*  */}
            {userData?.card && (
              <div className='mb-16'>
                <Container>
                  <Box
                    mx={{ md: 1 }}
                    my={{ xs: 1, sm: 1, md: 0 }}
                    p={3}
                    sx={{
                      background: `linear-gradient(135deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
                      borderRadius: '1rem',
                      position: 'relative',
                      overflow: 'hidden',
                      maxWidth: 400,
                      minHeight: 180,
                      mx: 'auto',
                    }}
                  >
                    <Box sx={{ position: 'relative', zIndex: 2 }}>
                      <p>WAN Cooperation Finance Bank</p>

                      <div className='mt-16 flex items-center justify-between'>
                        <p className='font-light'>
                          {userData?.card.card_number}
                        </p>
                        <p className='font-semibold text-lg'>
                          {userData?.card.user_name}
                        </p>
                      </div>
                      <div className='my-2 flex items-center justify-between'>
                        <p className='font-light'>{userData?.card.exp_date}</p>
                        <p>{userData?.card.cvv}</p>
                      </div>
                    </Box>
                  </Box>

                  {/*  */}
                  {userData?.card.status === 'pending' && (
                    <div className='py-4 mx-auto max-w-sm'>
                      <div className='flex items-center justify-between my-2'>
                        <p className='text-gray-600 font-light'>Card Type:</p>
                        <p className='capitalize text-gray-800 font-bold'>
                          {userData?.card.card_name}
                        </p>
                      </div>
                      <div className='flex items-center justify-between my-2'>
                        <p className='text-gray-600 font-light'>
                          Activation Status:
                        </p>
                        <p className='text-orange-500 capitalize font-bold'>
                          {userData?.card.status}
                        </p>
                      </div>
                      <div className='flex items-center justify-between my-2'>
                        <p className='text-gray-600 font-light'>
                          Activation Fee:
                        </p>
                        <p className='text-primary capitalize font-bold'>
                          ${userData?.card.card_creation_fee}
                        </p>
                      </div>
                    </div>
                  )}
                  {userData?.card.status === 'activated' && (
                    <div className='pt-16 mx-auto text-center'>
                      <p className='text-center mb-2 text-gray-700'>
                        CURRENT BALANCE
                      </p>
                      <p className='text-4xl font-extrabold text-gray-700'>
                        ${userData?.cardBalance?.toLocaleString() ?? '0.00'}
                      </p>

                      <button
                        className='mt-8 p-4 px-16 bg-primary text-center rounded-md text-sm text-white'
                        onClick={() => {
                          setModalOpen2(true);
                        }}
                      >
                        Top Up
                      </button>
                    </div>
                  )}
                </Container>
              </div>
            )}
            {/*  */}
            <p className='my-4 text-2xl font-bold'>Get virtual card</p>
            {/*  */}
            {virtual_cards.map((card) => (
              <Container key={card.name}>
                <Image
                  src={card.image}
                  className='w-full'
                  alt='capital trust finance bank virtual card'
                />

                <div className='mx-auto max-w-sm p-4'>
                  <p className='text-primary capitalize text-2xl font-extrabold'>
                    CTF {card.name}
                  </p>
                  {/*  */}
                  <div className='my-4 flex gap-2 items-center'>
                    <BsLightningChargeFill className='text-purple-500' />
                    <div className='text-gray-700'>
                      <p className='font-bold'>Instant Access</p>
                      <p className='font-light'>Get and activate instantly</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className='my-4 flex gap-2 items-center'>
                    <BsCurrencyDollar className='text-purple-500' />
                    <div className='text-gray-700'>
                      <p className='font-bold'>Card Creation Fee</p>
                      <p className='font-light'>
                        ${card.creation_fee.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className='my-4 flex gap-2 items-center'>
                    <MdOutlineTrendingUp className='text-purple-500' />
                    <div className='text-gray-700'>
                      <p className='font-bold'>Weekly Transaction Limit</p>
                      <p className='font-light'>
                        ${card.limit.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <button
                    className='mt-2 py-2 px-8 bg-primary text-center rounded-md text-sm text-white'
                    onClick={() => getVirtualCard(card)}
                  >
                    Get Virtual Card
                  </button>
                </div>
              </Container>
            ))}
          </Layout>
        </Sidebar>
      </Box>

      <MobileNav />

      {/*  */}
      <PopupModal
        handleClose={() => {
          setModalOpen2(false);
          setAsset('depositBalance');
        }}
        open={modalOpen2}
        title='top up virtual card'
      >
        {/*  */}
        <div className='my-6'>
          <label htmlFor='amount' className='text-sm text-gray-300 mb-2'>
            Amount
          </label>
          <input
            type='number'
            id='amount'
            className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {/*  */}
        <div className='my-6'>
          <label htmlFor='balanceType' className='text-sm text-gray-300 mb-2'>
            Deduct From:
          </label>
          <select
            name='balanceType'
            id='balanceType'
            className='w-full px-4 py-2 outline-none rounded-md bg-gray-700 text-gray-300 text-sm'
            onChange={(e) => setAsset(e.target.value.trim())}
          >
            <option value='depositBalance' defaultChecked>
              Deposit Balance ( ${userData?.depositBalance.toLocaleString()})
            </option>
            <option value='incomeBalance'>
              Income Balance ( ${userData?.incomeBalance.toLocaleString()})
            </option>
          </select>
        </div>
        <button
          className='mt-2 py-2 px-8 w-full bg-primary text-center rounded-md text-sm text-white'
          onClick={processCardTopup}
        >
          Proceed
        </button>
      </PopupModal>
      {/*  */}
    </PrivateRoute>
  );
};

export default Cards;
