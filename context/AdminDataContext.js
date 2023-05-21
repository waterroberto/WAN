import { createContext, useState, useEffect } from "react";
import { auth, db } from "../services/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot, doc, collection, query, where } from "firebase/firestore";

const initialState = {
  users: [],
  loanRequests: [],
  withdrawalRequests: [],
  depositRequests: [],
};

const AdminDataContext = createContext(initialState);

export const AdminDataProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loanRequests, setLoanRequests] = useState(null);
  const [withdrawalRequests, setWithdrawalRequests] = useState(null);
  const [depositRequests, setDepositRequests] = useState(null);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(collection(db, "users"), where("isAdmin", "==", false));
        onSnapshot(q, (doc) => {
          console.log(doc.docs);
        });
        setFetchingData(false);
      } else {
        setFetchingData(false);
      }
    });
  }, [auth]);

  return (
    <AdminDataContext.Provider value={{ users, fetchingData }}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminDataContext;
