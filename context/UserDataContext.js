import { createContext, useState } from "react";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  isVerified: true,
  accountLevel: 1,
  documents: { passport: "", ID: "", bankStatements: [] },
  depositBalance: 7812200,
  loanBalance: 7812200,
  deposits: [],
  withdrawals: [],
  phone: "",
  country: "",
  currency: "",
  accountNumber: "",
  username: "",
  transactions: [],
  loans: [],
  timeStamp: "01-12-2022",
};

const userDataContext = createContext(initialState);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    id: "joD20Hns2DoJoen21212",
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    isVerified: false,
    accountLevel: 1,
    depositBalance: 3788000,
    loanBalance: 25000000,
    documents: {
      passport:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000",
      ID: "",
      bankStatements: [],
    },
    deposits: [],
    withdrawals: [],
    country: "South Africa",
    currency: "R",
    email: "johndoe@gmail.com",
    phone: "09066466468",
    zipcode: "458212",
    DOB: "5-February-1998",
    timeStamp: "01-September-2022",
    accountNumber: "2023090101",
    referred: 2,
    loans: [
      {
        type: "loan",
        amount: 250000,
        status: "declined",
        duration: 12,
        dated: "12-March-2022",
        application_date: "12-March-2022",
        payout_date: ". . .",
        repayment_date: ". . .",
      },
      {
        type: "loan",
        amount: 25000000,
        status: "approved",
        duration: 6,
        dated: "28-April-2023",
        application_date: "28-April-2023",
        payout_date: "06-May-2023",
        repayment_date: "06-November-2023",
      },
      {
        type: "loan",
        amount: 1700000,
        status: "pending",
        duration: 24,
        dated: "01-May-2023",
        application_date: "01-May-2023",
        payout_date: ". . .",
        repayment_date: ". . .",
      },
    ],
    transactions: [
      {
        type: "deposit",
        amount: 2400000,
        date: new Date(),
        dated: "24-December-2022",
        status: "pending",
        narration: "Bank Transfer",
      },
      {
        type: "withdraw",
        amount: 172000,
        date: new Date(),
        dated: "21-December-2022",
        status: "pending",
        narration: "Bank Transfer",
      },
      {
        type: "withdraw",
        amount: 125000,
        date: new Date(),
        dated: "22-November-2022",
        status: "approved",
        narration: "Bank Transfer",
      },
      {
        type: "deposit",
        amount: 780000,
        date: new Date(),
        dated: "15-October-2022",
        status: "approved",
        narration: "Bank Transfer",
      },
      {
        type: "deposit",
        amount: 780000,
        date: new Date(),
        dated: "8-September-2022",
        status: "approved",
        narration: "Bank Transfer",
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
