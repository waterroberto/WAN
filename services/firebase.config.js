import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAEsNAp_ayER5Oh5_H0u6W0pZwDX3S_p50',
  authDomain: 'capital-trust-finance.firebaseapp.com',
  projectId: 'capital-trust-finance',
  storageBucket: 'capital-trust-finance.appspot.com',
  messagingSenderId: '304916520502',
  appId: '1:304916520502:web:3c61fb5857d7368de80297',
  measurementId: 'G-L9GVZ315KJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
