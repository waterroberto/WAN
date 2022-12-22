import { createContext, useState } from 'react';

const initialState = {
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
};

const userDataContext = createContext(initialState);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
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
    accountNumber: 'ICF147598623',
  });

  return (
    <userDataContext.Provider value={{ ...userData }}>
      {children}
    </userDataContext.Provider>
  );
};

export default userDataContext;
