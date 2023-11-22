// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "UPDATE FROM YOUR FIREBASE PROJECT SETTINGS",
  authDomain: "UPDATE FROM YOUR FIREBASE PROJECT SETTINGS",
  projectId: "UPDATE FROM YOUR FIREBASE PROJECT SETTINGS",
  storageBucket: "UPDATE FROM YOUR FIREBASE PROJECT SETTINGS",
  messagingSenderId: "UPDATE FROM YOUR FIREBASE PROJECT SETTINGS",
  appId: "UPDATE FROM YOUR FIREBASE PROJECT SETTINGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
