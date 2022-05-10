// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD7lqff3lJl1Uqx0s2ctT9Es0_rjzX4Nc",
  authDomain: "webapp-e8603.firebaseapp.com",
  projectId: "webapp-e8603",
  storageBucket: "webapp-e8603.appspot.com",
  messagingSenderId: "277354962381",
  appId: "1:277354962381:web:47130e95e1dfbbade37884",
  measurementId: "G-ZRTGHCVGNZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
