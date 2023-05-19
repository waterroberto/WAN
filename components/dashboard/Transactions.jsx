import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { RiFolder5Fill } from 'react-icons/ri';
import React, { useContext } from 'react';
import parseDate from '../../utils/parseDate';
import { FiArrowDownLeft, FiArrowUpRight, FiPlusCircle } from 'react-icons/fi';

const Transactions = ({
  transactions = [],
  currency = '$',
  customStyles = {},
}) => {
  return (
    <Box
      sx={{
        ...customStyles,
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
        borderRadius: '0.5rem',
      }}
    >
      {transactions.length > 0 ? (
        <Box sx={{ mt: 4 }}>
          {[...transactions]
            .sort(
              (a, b) =>
                new Date(b.dated).getTime() - new Date(a.dated).getTime()
            )
            .map((transaction, index) => (
              <>
                <Stack
                  key={transaction.type + (index + 1)}
                  direction='row'
                  alignItems='center'
                  justifyContent='space-between'
                  px={1}
                  py={1}
                >
                  <Stack direction='row' alignItems='center' gap={1}>
                    {transaction?.type.toLowerCase() === 'withdraw' ?
                      <span className='transaction-icon withdraw'>
                        <FiArrowUpRight />
                      </span>
                      :
                      transaction?.type.toLowerCase() === 'deposit' ?
                        <span className='transaction-icon deposit'>
                          <FiArrowDownLeft />
                        </span>
                        :
                        transaction?.type.toLowerCase() === 'loan' ?
                          <span className='transaction-icon loan'>
                            <FiPlusCircle />
                          </span> : ''
                    }
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: 'var(--mid)',
                      }}
                    >
                      {currency}
                      {transaction?.amount.toLocaleString()}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: 'var(--mid)',
                      textAlign: 'right',
                    }}
                  >
                    <Typography
                      component='span'
                      fontWeight={700}
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
                    <Typography
                      component='span'
                      sx={{
                        textTransform: 'uppercase',
                        color: 'var(--mid)',
                        fontSize: '12px',
                      }}
                    >
                      {parseDate(transaction?.dated)}
                    </Typography>
                  </Typography>
                </Stack>
                <Divider color='#555' />
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