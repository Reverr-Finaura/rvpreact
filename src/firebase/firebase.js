import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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

import { GoogleAuthProvider } from "firebase/auth";

// const analytics = getAnalytics(app);
