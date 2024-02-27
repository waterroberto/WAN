import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDUUWSdC1cuWlmXjC5iXMuqQ4MeRMFYxSs",
  authDomain: "ctf-bank.firebaseapp.com",
  projectId: "ctf-bank",
  storageBucket: "ctf-bank.appspot.com",
  messagingSenderId: "1045561399739",
  appId: "1:1045561399739:web:62e5d067f9b2e672674c9e"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

