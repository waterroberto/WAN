import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDtWRg-lxQaGyiZGRhQwD5NV8lhGTmZtVQ",
  authDomain: "southbank-bf925.firebaseapp.com",
  projectId: "southbank-bf925",
  storageBucket: "southbank-bf925.appspot.com",
  messagingSenderId: "331250612767",
  appId: "1:331250612767:web:6611de256cc92039b8b32a",
  measurementId: "G-5EPJC8MW6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
