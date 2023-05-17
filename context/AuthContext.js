import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase.config";

const initialState = {
  checkingStatus: true,
  isAuthenticated: false,
};

const AuthContext = createContext(initialState);

export function AuthContextProvider({ children }) {
  const [checkingStatus, setCheckingStatus] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      }
      setCheckingStatus(false);
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ checkingStatus, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
