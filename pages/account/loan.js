import { Box, Stack, Typography, Button } from '@mui/material';
import LoanHistory from '../../components/dashboard/Loan/LoanHistory';
import { FaFolderOpen } from 'react-icons/fa';
import React from 'react';
import { MobileNav, Meta, Dash, Sidebar } from '../../components';
import AppBar from '../../components/dashboard/AppBar';
import { useContext, useState } from 'react';
import userDataContext from '../../context/UserDataContext';
import PopupModal from '../../components/Global/Modal';

const Loan = (props) => {
  const [open, setOpen] = useState(false);
  const { loans, currency } = useContext(userDataContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Meta
        title='Incrypto Finance - Loan - Online Bank'
        description='Incrypto Financial Bank | Loan into your account'
      />
      <Dash />

      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Sidebar>
          <AppBar page='Loan' />
          <Box
            sx={{
              width: '100%',
              maxWidth: '1024px',
              margin: 'auto',
              background: 'var(--dark)',
              borderRadius: 1,
              border: '1px solid #333',
              mb: 4,
              p: { xs: 2, sm: 4 },
            }}
          >
            <Typography>FUND YOUR ACCOUNT</Typography>
            <Stack
              mt={2}
              direction={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='flex-start'
              gap={2}
              width={{ xs: '100%', lg: '50%' }}
            >
              <Button
                variant='text'
                disableElevation
                sx={{
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  background: 'var(--pale-blue)',
                  transition: '0.5s ease-in',

                  '&:hover': {
                    transition: '0.5s ease-out',
                    background: 'var(--blue)',
                  },
                  width: { xs: '100%', lg: '50%' },
                }}
              >
                Apply for Loan
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: '1024px',
              margin: 'auto',
              p: { xs: 2, sm: 4 },
              background: 'var(--dark)',
              borderRadius: 1,
              border: '1px solid #333',
            }}
          >
            <Typography>LOAN HISTORY</Typography>
            {(!loans || loans.length === 0) && (
              <Stack
                alignItems='center'
                justifyContent='center'
                mt={8}
                py={2}
                sx={{ color: 'var(--mid)' }}
              >
                <Box sx={{ fontSize: '64px' }}>
                  <FaFolderOpen />
                </Box>
                <Typography>No Transactions Yet</Typography>
              </Stack>
            )}
            {loans && loans.length > 0 && (
              <LoanHistory
                transactions={loans}
                currency={currency}
                modalOpen={open}
                handleModalClose={handleClose}
                handleModalOpen={handleOpen}
              />
            )}
          </Box>
        </Sidebar>
      </Box>
      <MobileNav />
    </>
  );
};

export default Loan;
