import { Box, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Layout, Meta } from '../../components';
import AdminMobileNav from '../../components/admin/AdminMobileNav';
import Nav from '../../components/admin/Nav';
import AdminRoute from '../../components/auth/AdminRoute';
import Container from '../../components/dashboard/Container';
import { db } from '../../services/firebase.config';
import parseDate from '../../utils/parseDate';
import { virtual_cards } from '../account/cards';

const Cards = () => {
  const [cards, setCards] = useState([]);
  let isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      const CARDS = [];
      const ref = collection(db, 'cards');

      onSnapshot(ref, (snap) => {
        snap.docs.forEach((doc) => {
          CARDS.push({ ...doc.data(), _id: doc.id });
        });

        setCards(CARDS);
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  const activateCard = async (userId, cardId) => {
    const userRef = doc(db, 'users', userId);
    const cardRef = doc(db, 'cards', cardId);

    try {
      cogoToast.loading('Activating...');
      const userRes = await getDoc(userRef);
      const cardRes = await getDoc(cardRef);

      if (userRes.exists && cardRes.exists) {
        const userCard = userRes.data()?.card;

        const updatedUserCard = { ...userCard, status: 'activated' };

        await updateDoc(userRef, {
          card: updatedUserCard,
        });
        await updateDoc(cardRef, {
          status: 'activated',
        });

        cogoToast.success('Activated Successfully. Window would reload.');

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      cogoToast.error('Cannot activate card at the moment.');
    }
  };

  const deleteCard = async (id) => {
    const cardRef = doc(db, 'cards', id);

    if (confirm('Are you sure you want to delete this card?')) {
      try {
        cogoToast.loading('Deleting card...');

        await deleteDoc(cardRef);

        cogoToast.success('Deleted.');

        window.location.reload();
      } catch (error) {
        console.log(error);
        cogoToast.error('Error deleting card');
      }
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
              Cards
            </Typography>

            {console.log(cards)}

            {cards && cards.length > 0 ? (
              <div>
                {[...cards]
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map((card) => (
                    <Container key={card?.card_number}>
                      <div className='mx-auto max-w-sm'>
                        <Image
                          src={
                            virtual_cards.find(
                              (el) => el.name === card?.card_name
                            )?.image ?? ''
                          }
                          alt='sb virtual card'
                          className='mx-auto block mb-4'
                        />
                        {/*  */}
                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>
                            Date Applied:
                          </p>
                          <p className='capitalize'>{parseDate(card?.date)}</p>
                        </div>
                        {/*  */}
                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>Card Type:</p>
                          <p className='capitalize'>{card?.card_name}</p>
                        </div>
                        {/*  */}
                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>
                            Activation Status:
                          </p>
                          <p
                            className={`${
                              card?.status === 'pending'
                                ? 'text-orange-500'
                                : card?.status === 'activated'
                                ? 'text-green-500'
                                : 'text-blue-500'
                            } capitalize`}
                          >
                            {card?.status}
                          </p>
                        </div>
                        {/*  */}

                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>
                            Activation Fee:
                          </p>
                          <p className='text-teal-500 capitalize'>
                            ${card?.card_creation_fee}
                          </p>
                        </div>
                        {/*  */}
                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>User Name</p>
                          <p className='text-teal-500 capitalize'>
                            {card?.user_name}
                          </p>
                        </div>
                        {/*  */}
                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>User Email</p>
                          <p className='text-teal-500 font-light text-sm'>
                            {card?.user_email}
                          </p>
                        </div>
                        {/*  */}
                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>User ID</p>
                          <p className='text-teal-500 font-light text-sm'>
                            {card?.user_id}
                          </p>
                        </div>
                        {/*  */}
                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>
                            Card Number
                          </p>
                          <p className='text-teal-500 font-light'>
                            {card?.card_number}
                          </p>
                        </div>
                        {/*  */}
                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>
                            Expiry Date
                          </p>
                          <p className='text-teal-500 font-light'>
                            {card?.exp_date}
                          </p>
                        </div>
                        {/*  */}
                        <div className='flex items-center justify-between my-3'>
                          <p className='text-gray-300 font-light'>CVV</p>
                          <p className='text-teal-500 font-light'>
                            {card?.cvv}
                          </p>
                        </div>
                        {/*  */}
                        {card?.status !== 'activated' && (
                          <button
                            className='mt-8 p-4 w-full bg-green-500 text-center rounded-md text-sm text-white'
                            onClick={() => {
                              activateCard(card?.user_id, card?._id);
                            }}
                          >
                            Activate Card
                          </button>
                        )}
                        <button
                          className='mt-8 p-4 w-full bg-red-700 text-center rounded-md text-sm text-white'
                          onClick={() => {
                            deleteCard(card?._id);
                          }}
                        >
                          Delete Card
                        </button>
                      </div>
                    </Container>
                  ))}
              </div>
            ) : (
              <Container>
                <p className='text-2xl'>No cards</p>
              </Container>
            )}
          </Box>
        </Layout>
      </Box>
      <AdminMobileNav />
    </AdminRoute>
  );
};

export default Cards;
