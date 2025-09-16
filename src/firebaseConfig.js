// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd-f-V4dIEdk0M2JTx9AzWsHY9CMq6ekA",
  authDomain: "techecommerce-veyor-900b9.firebaseapp.com",
  projectId: "techecommerce-veyor-900b9",
  storageBucket: "techecommerce-veyor-900b9.firebasestorage.app",
  messagingSenderId: "312429392753",
  appId: "1:312429392753:web:172d95a903356edd5d7cd0",
  measurementId: "G-8GXKFQKQLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
