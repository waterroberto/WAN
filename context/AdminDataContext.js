import { createContext, useState, useEffect } from "react";
import { auth, db } from "../services/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

const initialState = {
  users: [],
  loanRequests: [],
  withdrawalRequests: [],
  depositRequests: [],
};

const AdminDataContext = createContext(initialState);

export const AdminDataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loanRequests, setLoanRequests] = useState(null);
  const [withdrawalRequests, setWithdrawalRequests] = useState(null);
  const [depositRequests, setDepositRequests] = useState(null);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(db, "users"), where("isAdmin", "==", false));
        const q2 = query(
          collection(db, "loanRequests"),
          where("status", "==", "pending")
        );

        const USERS = [];
        const LOANS = [];

        const userSnapshot = await getDocs(q);
        userSnapshot.forEach((doc) => {
          USERS.push(doc.data());
        });

        const loanSnapshot = await getDocs(q2);
        loanSnapshot.forEach((doc) => {
          LOANS.push(doc.data());
        });

        setUsers(USERS);
        setLoanRequests(LOANS);
      }
      setFetchingData(false);
    });
  }, [auth]);

  return (
    <AdminDataContext.Provider value={{ users, fetchingData, loanRequests }}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminDataContext;
