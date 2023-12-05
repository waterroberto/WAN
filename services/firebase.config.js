import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDTiQPS_ZcxKMlWvpJ1D_SI1tYR1DJeWTw',
  authDomain: 'ravdak-finance.firebaseapp.com',
  projectId: 'ravdak-finance',
  storageBucket: 'ravdak-finance.appspot.com',
  messagingSenderId: '437313426680',
  appId: '1:437313426680:web:b9c89a998d24dd6d4d170d',
  measurementId: 'G-10PG1VLXRR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
