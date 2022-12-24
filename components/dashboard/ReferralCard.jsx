import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logoOutlineDark from '../../assets/logo-outline-dark.svg';

const ReferralCard = () => {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 2, md: 4 },
        my: 4,
        position: 'relative',
        width: '100%',
        height: '15rem',
        background: 'var(--dark)',

        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          opacity: 0.5,
          background: `url("https://firebasestorage.googleapis.com/v0/b/elite-financial-services.appspot.com/o/pattern.png?alt=media&token=657fc54a-3643-40cb-b691-15c566a9f527") no-repeat center center/cover`,
        },

        '& *': {
          zIndex: 2,
        },
        borderRadius: '1rem',
      }}
    >
      <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, p: 1 }}>
        Referral Earnings
      </Typography>

      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        gap={1}
        sx={{
          p: 2,
          mt: 4,
          width: '100%',
          background:
            'linear-gradient(90deg, rgba(1,126,255,1)  0%, rgba(96,174,255,1)80%)',
          borderRadius: '1rem',
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 700, color: 'var(--darker)', mb: 0.5 }}>
            Refer & Earn
          </Typography>
          <Typography variant='subtitle2' sx={{ fontWeight: 300 }}>
            Earn 5$ when you refer a friend and they make a deposit of over 10$
          </Typography>
        </Box>
        <Image
          src={logoOutlineDark}
          alt='Logo outline dark for incrypto finance'
          style={{
            height: '80px',
            width: '80px',
          }}
        />
      </Stack>
    </Box>
  );
};

export default ReferralCard;
