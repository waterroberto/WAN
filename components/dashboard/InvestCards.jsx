import React, { useRef, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import liftingWeight from '../../assets/png/business-person-lifting-weight.png';
import showingDollar from '../../assets/png/man-showing-dollar-and-rupee.png';
import holdingCurrency1 from '../../assets/png/person-holding-currency-1.png';
import holdingCurrency from '../../assets/png/person-holding-currency.png';
import Image from 'next/image';

const swiperCardStyles = {
  background: '#252837',
  marginTop: '1rem',
  height: '160px',
  color: '#f4f4f4',
  padding: '2rem',
  borderRadius: '1rem',
  border: '1px solid rgb(1, 126, 255,0.2)',
};

const cardsData = [
  {
    image: showingDollar,
    title: (
      <>
        Fund <br /> Account
      </>
    ),
  },
  {
    image: holdingCurrency,
    title: (
      <>
        Loans <br /> & Grants
      </>
    ),
  },
  {
    image: holdingCurrency1,
    title: (
      <>
        Start <br /> Saving
      </>
    ),
  },
  {
    image: liftingWeight,
    title: (
      <>
        Start <br /> Investing
      </>
    ),
  },
];

export default function InvestCards() {
  return (
    <Box>
      <Typography variant='h5' component='p' sx={{ fontWeight: 700 }}>
        Build Your Wealth
      </Typography>
      <Grid container columns={12} sx={{ pt: 2 }}>
        {cardsData.map((card, index) => (
          <Grid
            key={card.title + (index + 1)}
            item
            xs={12}
            sm={6}
            lg={3}
            data-aos='fade-up'
          >
            <Box
              style={swiperCardStyles}
              mx={{ sm: 1 }}
              my={{ xs: 1, sm: 1, md: 0 }}
              sx={{ position: 'relative' }}
            >
              <Image
                src={card.image}
                alt={card.title}
                height={130}
                width={130}
                style={{ position: 'absolute', bottom: '1rem', left: '0.5rem' }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  width: '100%',
                  height: '100px',
                }}
              >
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 600 }}>
                  {card.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
