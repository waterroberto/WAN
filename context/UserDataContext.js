import { createContext, useState } from 'react';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  isVerified: true,
  accountLevel: 1,
  documents: { passport: '' },
  deposits: [],
  withdrawals: [],
  phone: '',
  country: '',
  currency: '',
  accountNumber: '',
  username: 'ernest20221212',
  transactions: [],
};

const userDataContext = createContext(initialState);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    id: 'eRnEsT202IsAiaH21212',
    firstName: 'Isaiah',
    lastName: 'Ernest',
    isVerified: true,
    accountLevel: 1,
    documents: { passport: '' },
    deposits: [],
    withdrawals: [],
    country: 'United States',
    currency: 'NG',
    email: 'isaiahernest@gmail.com',
    phone: '09055355357',
    zipcode: '569101',
    DOB: '07-10-2022',
    accountNumber: 'IF2212205845',
    username: 'ernest20221212',
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
