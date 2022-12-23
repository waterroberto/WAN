import React, { useContext } from 'react';
import { IoDocumentAttachSharp } from 'react-icons/io5';
import { HiUser } from 'react-icons/hi';
import { Typography, Box, Button } from '@mui/material';
import userDataContext from '../../../context/UserDataContext';

const boxStyles = {
  position: 'absolute',
  width: '150px',
  height: '150px',
  background:
    'linear-gradient(60deg, rgba(255,196,123,0.6) 0%, rgba(254,107,53,1) 80%)',
  borderRadius: '50%',
};

const DetailsCard = () => {
  const { accountNumber, accountLevel } = useContext(userDataContext);
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
          Level {accountLevel} Account
        </Typography>
        <Typography
          my={2}
          sx={{
            color: '#fff',
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem' },
          }}
        >
          {accountNumber}
        </Typography>
        <Button
          variant='text'
          disableElevation
          startIcon={<IoDocumentAttachSharp />}
          sx={{
            color: '#fff',
            textTransform: 'capitalize',
            fontWeight: 500,
            fontFamily: 'inherit',
            mr: 4,
          }}
        >
          Increase Limit
        </Button>
        <Button
          variant='text'
          disableElevation
          startIcon={<HiUser />}
          sx={{
            color: '#fff',
            textTransform: 'capitalize',
            fontWeight: 500,
            fontFamily: 'inherit',
          }}
        >
          Account
        </Button>
      </Box>
      <Box
        sx={{
          ...boxStyles,
          bottom: '-20%',
          left: '-10%',
          background:
            'linear-gradient(180deg, rgba(255,196,123,0.25) 0%, rgba(254,107,53,0.75) 80%)',
        }}
      />
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
