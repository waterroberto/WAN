import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import userDataContext from '../../../context/UserDataContext';

const boxStyles = {
  position: 'absolute',
  width: '150px',
  height: '150px',
  background:
    'linear-gradient(90deg, rgba(255,196,123,0.6) 0%, rgba(254,107,53,1) 80%)',
  borderRadius: '50%',
};

const DetailsCard = () => {
  const { userData } = useContext(userDataContext);

  return (
    <Box
      mx={{ md: 1 }}
      my={{ xs: 1, sm: 1, md: 0 }}
      p={3}
      sx={{
        background:
          'linear-gradient(60deg, rgba(255,196,123,1) 0%, rgba(254,107,53,1) 80%)',
        borderRadius: '1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant='subtitle1' sx={{ color: '#fff', fontWeight: 500 }}>
          Deposit Balance
        </Typography>
        <Typography
          my={2}
          sx={{
            color: '#fff',
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem' },
          }}
        >
          {userData?.currency}
          {(userData?.depositBalance).toLocaleString()}
        </Typography>
      </Box>

      <Box
        sx={{
          ...boxStyles,
          top: '-25%',
          right: '-10%',
          width: '250px',
          height: '250px',
        }}
      />
    </Box>
  );
};

export default DetailsCard;
