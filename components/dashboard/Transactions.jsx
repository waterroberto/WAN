import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { RiFolder5Fill } from 'react-icons/ri';
import React, { useContext } from 'react';
import userDataContext from '../../context/UserDataContext';

const Transactions = () => {
  const { transactions, currency } = useContext(userDataContext);
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 2, md: 4 },
        my: 4,
        position: 'relative',
        width: '100%',
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
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography sx={{ fontSize: '1.4rem', fontWeight: 700, p: 1 }}>
          Transactions
        </Typography>
        <Button variant='outlined' color='secondary'>
          {transactions.length}
        </Button>
      </Stack>
      {transactions.length > 0 ? (
        <Box sx={{ mt: 4 }}>
          {transactions.map((transaction, index) => (
            <>
              <Stack
                key={transaction.type + (index + 1)}
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                px={1}
                py={1}
              >
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    color: 'var(--pale-blue)',
                  }}
                >
                  {transaction.type}
                  <br />
                  <Typography
                    component='span'
                    sx={{
                      textTransform: 'uppercase',
                      color: 'var(--mid)',
                      fontSize: '12px',
                    }}
                  >
                    {transaction.dated}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: 'var(--mid)',
                    textAlign: 'right',
                  }}
                >
                  <Typography
                    component='span'
                    sx={{
                      textTransform: 'uppercase',
                      color:
                        transaction.status === 'approved'
                          ? 'var(--green)'
                          : 'var(--secondary)',
                      fontSize: '12px',
                    }}
                  >
                    {transaction.status}
                  </Typography>{' '}
                  <br />
                  {transaction.type === 'deposit' ? '+' : '-'}
                  {currency}
                  {transaction.amount.toLocaleString()}
                </Typography>
              </Stack>
              <Divider />
            </>
          ))}
        </Box>
      ) : (
        <Typography sx={{ textAlign: 'center', opacity: 0.5, mt: 4 }}>
          <RiFolder5Fill style={{ fontSize: '4rem' }} /> <br />
          <Typography component='span' mt={1}>
            No Transactions
          </Typography>
        </Typography>
      )}
    </Box>
  );
};

export default Transactions;
