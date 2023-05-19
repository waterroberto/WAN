import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDxHMawPpkofNQ4pwPE-EIWalDL6sO4L8",
  authDomain: "west-financial-services.firebaseapp.com",
  projectId: "west-financial-services",
  storageBucket: "west-financial-services.appspot.com",
  messagingSenderId: "1064880978618",
  appId: "1:1064880978618:web:d7b4fbd108a920194ee083",
  measurementId: "G-ZTQH4B5R4G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
