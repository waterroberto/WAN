import { createContext, useState, useEffect } from "react";

import { auth, db } from "../services/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot, doc } from "firebase/firestore";

const initialState = {
  userData: {},
};

const userDataContext = createContext(initialState);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const ref = doc(db, "users", user.uid);
        onSnapshot(ref, (doc) => {
          setUserData({ ...doc.data(), isVerified: user.emailVerified });
        });
        setFetchingData(false);
      } else {
        setFetchingData(false);
      }
    });
  }, [auth]);

  return (
    <userDataContext.Provider value={{ userData, fetchingData }}>
      {children}
    </userDataContext.Provider>
  );
};

export default userDataContext;
