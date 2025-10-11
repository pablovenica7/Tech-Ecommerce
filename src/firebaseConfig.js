import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd-f-V4dIEdk0M2JTx9AzWsHY9CMq6ekA",
  authDomain: "techecommerce-veyor-900b9.firebaseapp.com",
  projectId: "techecommerce-veyor-900b9",
  storageBucket: "techecommerce-veyor-900b9.firebasestorage.app",
  messagingSenderId: "312429392753",
  appId: "1:312429392753:web:172d95a903356edd5d7cd0",
  measurementId: "G-8GXKFQKQLT"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
