import { Divider, Stack, Typography } from '@mui/material';
import cogoToast from 'cogo-toast';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import userDataContext from '../../../context/UserDataContext';
import { db } from '../../../services/firebase.config';
import parseDate from '../../../utils/parseDate';
import PopupModal from '../../Global/Modal';

const TransactionHistory = ({
  transactions,
  isAdmin = false,
  userId = '',
  currency,
}) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { userData } = useContext(userDataContext);

  const processTransaction = async (type, status, id, amount) => {
    const collectionType =
      type === 'deposit' ? 'depositRequests' : 'withdrawalRequests';

    if (userData) {
      cogoToast.loading('Updating transaction...');

      const ref = doc(db, collectionType, id);

      const userRef = doc(db, 'users', userId);

      await getDoc(ref)
        .then((_res) => {
          getDoc(userRef)
            .then((res) => {
              if (res.exists() && res.data()) {
                const index = type === 'deposit' ? 'deposits' : 'withdrawals';

                const trxns = res?.data()[index];
                const filtered = trxns.filter((trx) => trx.id !== id);

                const current = trxns.find((trx) => trx.id === id);
                const updated = { ...current, status };

                const docRef = doc(db, collectionType, id);

                updateDoc(userRef, {
                  [index]: [...filtered, updated],
                  depositBalance:
                    status === 'declined'
                      ? res.data().depositBalance + amount
                      : res.data().depositBalance,
                })
                  .then(() => {
                    updateDoc(docRef, {
                      status,
                    })
                      .then(() => {
                        cogoToast.success('Successful');
                      })
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err));
              }
            })
            .catch((err) => {
              cogoToast.error('Error processing action. Contact developer');
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className='mt-8 flex flex-col mb-8'>
      {/*  */}
      <PopupModal
        title='Transaction Details'
        open={modalOpen && selectedTransaction}
        handleClose={closeModal}
      >
        {selectedTransaction && (
          <>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  color: 'var(--mid)',
                  fontSize: '14px',
                }}
              >
                Transaction Type
              </Typography>

              <Typography
                sx={{
                  textTransform: 'capitalize',
                  color: '#fff',
                  fontSize: '14px',
                }}
              >
                {selectedTransaction?.type}
              </Typography>
            </Stack>
            <Divider color='#555' />
            {/*  */}
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  color: 'var(--mid)',
                  fontSize: '14px',
                }}
              >
                Transaction ID
              </Typography>

              <Typography
                sx={{
                  textTransform: 'capitalize',
                  color: '#fff',
                  fontSize: '14px',
                }}
              >
                {selectedTransaction?.id}
              </Typography>
            </Stack>
            <Divider color='#555' />
            {/*  */}
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  color: 'var(--mid)',
                  fontSize: '14px',
                }}
              >
                Transaction Status
              </Typography>

              <Typography
                sx={{
                  textTransform: 'capitalize',
                  color: '#fff',
                  fontSize: '14px',
                  color:
                    selectedTransaction.status === 'approved'
                      ? 'var(--green)'
                      : selectedTransaction.status === 'declined'
                      ? 'var(--red)'
                      : 'var(--secondary)',
                }}
              >
                {selectedTransaction?.status}
              </Typography>
            </Stack>
            <Divider color='#555' />
            {/*  */}
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  color: 'var(--mid)',
                  fontSize: '14px',
                }}
              >
                Amount
              </Typography>

              <Typography
                sx={{
                  textTransform: 'capitalize',
                  color: '#fff',
                  fontSize: '14px',
                }}
              >
                {currency}
                {selectedTransaction?.amount.toLocaleString()}
              </Typography>
            </Stack>
            <Divider color='#555' />
            {/*  */}
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  color: 'var(--mid)',
                  fontSize: '14px',
                }}
              >
                Date
              </Typography>

              <Typography
                sx={{
                  textTransform: 'capitalize',
                  color: '#fff',
                  fontSize: '14px',
                }}
              >
                {parseDate(selectedTransaction?.date?.seconds * 1000)}
              </Typography>
            </Stack>
            <Divider color='#555' />
            {/*  */}

            <>
              {selectedTransaction?.type === 'withdraw' && (
                <>
                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                    px={1}
                    py={1}
                  >
                    <Typography
                      sx={{
                        color: 'var(--mid)',
                        fontSize: '14px',
                      }}
                    >
                      Account Number
                    </Typography>

                    <Typography
                      sx={{
                        textTransform: 'capitalize',
                        color: '#fff',
                        fontSize: '14px',
                      }}
                    >
                      {selectedTransaction?.accountNumber}
                    </Typography>
                  </Stack>
                  <Divider color='#555' />
                  {/*  */}
                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                    px={1}
                    py={1}
                  >
                    <Typography
                      sx={{
                        color: 'var(--mid)',
                        fontSize: '14px',
                      }}
                    >
                      Account Holder Name
                    </Typography>

                    <Typography
                      sx={{
                        textTransform: 'capitalize',
                        color: '#fff',
                        fontSize: '14px',
                      }}
                    >
                      {selectedTransaction?.accountHolder}
                    </Typography>
                  </Stack>
                  <Divider color='#555' />
                  {/*  */}
                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                    px={1}
                    py={1}
                  >
                    <Typography
                      sx={{
                        color: 'var(--mid)',
                        fontSize: '14px',
                      }}
                    >
                      Bank Name
                    </Typography>

                    <Typography
                      sx={{
                        textTransform: 'capitalize',
                        color: '#fff',
                        fontSize: '14px',
                      }}
                    >
                      {selectedTransaction?.bankName}
                    </Typography>
                  </Stack>
                  <Divider color='#555' />
                </>
              )}
            </>
          </>
        )}
      </PopupModal>
      {/*  */}
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden border-b border-gray-300'>
            <table className='min-w-full divide-y divide-gray-500'>
              <thead className='bg-gray-800'>
                <tr className='text-sm text-gray-200 uppercase'>
                  <th
                    scope='col'
                    className='p-6 text-left tracking-wider font-bold'
                  >
                    Transaction
                  </th>
                  <th
                    scope='col'
                    className='p-6 text-left tracking-wider font-bold'
                  >
                    Amount
                  </th>
                  <th
                    scope='col'
                    className='p-6 text-left tracking-wider font-bold'
                  >
                    Via
                  </th>

                  <th
                    scope='col'
                    className='p-6 text-left tracking-wider font-bold'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='p-6 text-left tracking-wider font-bold'
                  >
                    Date
                  </th>
                  {isAdmin && (
                    <th
                      scope='col'
                      className='p-6 text-right tracking-wider font-bold'
                    >
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              {transactions && (
                <tbody className='bg-gray-700 divide-y divide-gray-200 text-xs'>
                  {transactions
                    ?.sort((a, b) => b.date.seconds - a.date.seconds)
                    .map((transaction, i) => (
                      <tr
                        key={transaction.id}
                        className={`capitalize text-sm text-gray-300 ${
                          i % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'
                        }`}
                        onClick={() => {
                          openModal();
                          setSelectedTransaction(transaction);
                        }}
                      >
                        <td
                          className={`px-6 py-4 whitespace-nowrap font-semibold ${
                            transaction.type === 'withdraw'
                              ? 'text-red-500'
                              : 'text-green-500'
                          }`}
                        >
                          {transaction.type}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          {currency ?? '€'}
                          {transaction.amount.toLocaleString()}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          {transaction.method}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap font-bold  ${
                            transaction.status === 'declined'
                              ? 'text-red-500'
                              : transaction.status === 'approved' ||
                                transaction.status === 'processed'
                              ? 'text-green-500'
                              : 'text-orange-600'
                          }`}
                        >
                          {transaction.status}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          {parseDate(transaction.date.seconds * 1000)}
                        </td>
                        {isAdmin && (
                          <td className='px-6 py-4 whitespace-nowrap text-right'>
                            {transaction.status !== 'pending' && <p>N/A</p>}
                            {transaction.status === 'pending' && (
                              <>
                                <button
                                  type='button'
                                  className='bg-gray-900 mx-2 text-xs p-2 font-semibold text-green-400 border border-green-500 rounded-sm'
                                  onClick={() =>
                                    processTransaction(
                                      transaction.type,
                                      'approved',
                                      transaction.id
                                    )
                                  }
                                >
                                  Approve
                                </button>

                                <button
                                  type='button'
                                  className='bg-gray-900 mx-2 text-xs p-2 font-semibold text-red-600 border border-red-600 rounded-sm'
                                  onClick={() =>
                                    processTransaction(
                                      transaction.type,
                                      'declined',
                                      transaction.id,
                                      transaction.amount
                                    )
                                  }
                                >
                                  Decline
                                </button>
                              </>
                            )}
                          </td>
                        )}
                      </tr>
                    ))}
                </tbody>
              )}
            </table>

            {transactions.length === 0 && (
              <div className='p-16'>
                <p className='text-gray-500 text-center text-2xl font-light'>
                  No transaction
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
