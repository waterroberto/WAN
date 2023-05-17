import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

export const AuthService = {
  login: async (email, password) => {
    const req = await signInWithEmailAndPassword(auth, email, password);

    return req.user;
  },

  processError: (error) => {
    const errArray = error.split("/");

    const errString = errArray[1];
    const errMessage = errString.replace("-", " ");

    return errMessage.toUpperCase();
  },
};
