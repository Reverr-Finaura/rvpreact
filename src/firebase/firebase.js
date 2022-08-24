import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  serverTimestamp,
  setDoc,
  getDocs,
  collection,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { dateGenerator } from "../utils/utils";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Authentication

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

// Forgot Password

export const sendPasswordResetMail = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const confirmPaswdReset = (oobCode, newPassword) => {
  return confirmPasswordReset(auth, oobCode, newPassword);
};

// Firestore
const database = getFirestore();

// getInverstoDeals
export const getInvestorDeals = async () => {
  try {
    let investorDeals = [];
    await (
      await getDocs(collection(database, `InvestorDeals`))
    ).forEach((doc) => {
      investorDeals.push({ ...doc.data() });
    });
    return investorDeals;
  } catch (err) {
    console.log("Err: ", err);
  }
};

// addUser
export const addUserInDatabase = async (uid, data) => {
  try {
    return await setDoc(doc(database, "Users", uid), {
      ...data,
      createdAt: dateGenerator(),
    });
  } catch (err) {
    console.log("Err: ", err);
  }
};

// getUser

export const getUserFromDatabase = async (uid) => {
  let User;
  await (
    await getDocs(
      query(collection(database, `Users`), where("uid", "==", `${uid}`))
    )
  ).forEach((doc) => {
    User = { ...doc.data() };
  });
  return User;
};

export const fetchDealsFromDatabase = async () => {
  try {
    let deals = [];
    await (
      await getDocs(collection(database, `Investordeals`))
    ).forEach((doc) => {
      deals.push({ ...doc.data() });
    });
    return deals;
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const fetchBlogsFromDatabase = async () => {
  try {
    let blogs = [];
    await (
      await getDocs(collection(database, `Blogs`))
    ).forEach((doc) => {
      blogs.push({ ...doc.data() });
    });
    return blogs;
  } catch (err) {
    console.log("Err: ", err);
  }
};
