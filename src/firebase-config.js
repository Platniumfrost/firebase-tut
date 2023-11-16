import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVZPvIWrVPiVmXZ0xMxaLuMzPfZa2tgYM",
  authDomain: "fir-tutorial-72165.firebaseapp.com",
  projectId: "fir-tutorial-72165",
  storageBucket: "fir-tutorial-72165.appspot.com",
  messagingSenderId: "636390124084",
  appId: "1:636390124084:web:4c15a331c84283fca73861",
  measurementId: "G-CNRTVYRGD0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
