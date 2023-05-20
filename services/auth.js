import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase.config";

export const AuthService = {
  login: async function (email, password) {
    const req = await signInWithEmailAndPassword(auth, email, password);

    return req.user;
  },

  logout: async () => {
    await signOut(auth);
  },

  processError: (error) => {
    const errArray = error.split("/");
    const errString = errArray[1];
    const errMessage = errString.replace("-", " ");

    return errMessage.toUpperCase();
  },

  loginAdmin: async function (email, password) {
    const user = this.login(email, password);
    let uid = null;

    if (user) {
      uid = (await user).uid;
      const userRef = doc(db, "users", uid);
      const snapshot = await getDoc(userRef);

      if (snapshot.data().isAdmin) {
        return snapshot.data();
      } else {
        throw new Error("admin/unauthorized-user. access-denied.");
      }
    }
  },
};
