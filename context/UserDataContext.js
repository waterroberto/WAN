import { createContext, useState } from 'react';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  isVerified: true,
  accountLevel: 1,
  documents: { passport: '', ID: '', bankStatements: [] },
  depositBalance: 7812200,
  loanBalance: 7812200,
  deposits: [],
  withdrawals: [],
  phone: '',
  country: '',
  currency: '',
  accountNumber: '',
  username: '',
  transactions: [],
  loans: [],
};

const userDataContext = createContext(initialState);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    id: 'EeT20Rns2IsAiaH21212',
    firstName: 'Haiasi',
    lastName: 'Tsenre',
    isVerified: true,
    accountLevel: 1,
    depositBalance: 7812200,
    loanBalance: 7812200,
    documents: { passport: '', ID: '', bankStatements: [] },
    deposits: [],
    withdrawals: [],
    country: 'South Africa',
    currency: 'R',
    email: 'isaiaerne@gmail.com',
    phone: '09055355357',
    zipcode: '569101',
    DOB: '05-02-1998',
    accountNumber: 'IF2212205845',
    username: 'nere202st21212',
    loans: [
      {
        type: 'loan',
        amount: 250000,
        status: 'declined',
        duration: '12 months',
        dated: '12-March-2022',
        application_date: '12-March-2022',
        payout_date: '. . .',
        repayment_date: '. . .',
      },
      {
        type: 'loan',
        amount: 1500000,
        status: 'approved',
        duration: '6 months',
        dated: '28-April-2023',
        application_date: '28-April-2023',
        payout_date: '06-May-2023',
        repayment_date: '06-November-2023',
      },
      {
        type: 'loan',
        amount: 1700000,
        status: 'pending',
        duration: '24 months',
        dated: '01-May-2023',
        application_date: '01-May-2023',
        payout_date: '. . .',
        repayment_date: '. . .',
      },
    ],
    transactions: [
      {
        type: 'deposit',
        amount: 2400000,
        date: new Date(),
        dated: '24-December-2022',
        status: 'pending',
        narration: 'Bank Transfer',
      },
      {
        type: 'withdraw',
        amount: 172000,
        date: new Date(),
        dated: '21-December-2022',
        status: 'pending',
        narration: 'Bank Transfer',
      },
      {
        type: 'withdraw',
        amount: 125000,
        date: new Date(),
        dated: '22-November-2022',
        status: 'approved',
        narration: 'Bank Transfer',
      },
      {
        type: 'deposit',
        amount: 780000,
        date: new Date(),
        dated: '15-October-2022',
        status: 'approved',
        narration: 'Bank Transfer',
      },
      {
        type: 'deposit',
        amount: 2026460,
        date: new Date(),
        dated: '8-September-2022',
        status: 'approved',
        narration: 'Bank Transfer',
      },
    ],
  });

  return (
    <userDataContext.Provider value={{ ...userData }}>
      {children}
    </userDataContext.Provider>
  );
};

export default userDataContext;
