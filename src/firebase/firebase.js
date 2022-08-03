import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, serverTimestamp, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG7aYqGunCEEqMePnR7YN_uMsn8yvwtcM",
  authDomain: "reverr-25fb3.firebaseapp.com",
  databaseURL: "https://reverr-25fb3-default-rtdb.firebaseio.com",
  projectId: "reverr-25fb3",
  storageBucket: "reverr-25fb3.appspot.com",
  messagingSenderId: "710745964607",
  appId: "1:710745964607:web:9c0b08192f30bb97bab88a",
  measurementId: "G-7S7P5C52RG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const createUserWithEmailPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// Firestore
const database = getFirestore();

export const addUserInDatabase = async (uid, data) => {
  try {
    return await setDoc(doc(database, "Users", uid), {
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (err) {
    console.log("Err: ", err);
  }
};
