// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKKXdW5-M-TceZuafcaKtg47EBx7-irlM",
  authDomain: "ashcore-XXXXX.firebaseapp.com",
  projectId: "ashcore-XXXXX",
  storageBucket: "ashcore-XXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXX",
  appId: "1:XXXXXXXXXX:web:XXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();