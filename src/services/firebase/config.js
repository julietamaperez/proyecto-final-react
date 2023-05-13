// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAFT-RPzZED_VLChkWq8dfYpYXL2QTi4kA",
  authDomain: "tienda-sya.firebaseapp.com",
  projectId: "tienda-sya",
  storageBucket: "tienda-sya.appspot.com",
  messagingSenderId: "818462936212",
  appId: "1:818462936212:web:0531ccfa9b3656ebfaf881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);