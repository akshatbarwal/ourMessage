// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO8XB7ZS_fLwOzEaOsH8iCDY-XL20jskw",
  authDomain: "ourmessage-ec34f.firebaseapp.com",
  projectId: "ourmessage-ec34f",
  storageBucket: "ourmessage-ec34f.appspot.com",
  messagingSenderId: "205783120611",
  appId: "1:205783120611:web:46d12292f924545722a3d6",
  measurementId: "G-N85ZREPXSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// connecting to our firestore database.
export const db = getFirestore(app);