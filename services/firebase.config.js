import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBs8v-M8j1QGlMLUr-8IfODiphqPQyzA3k',
  authDomain: 'massaa-bank.firebaseapp.com',
  projectId: 'massaa-bank',
  storageBucket: 'massaa-bank.appspot.com',
  messagingSenderId: '638810260757',
  appId: '1:638810260757:web:597ba99f58ada87a15951c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
