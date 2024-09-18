// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "todo-mern-3f2d3.firebaseapp.com",
  projectId: "todo-mern-3f2d3",
  storageBucket: "todo-mern-3f2d3.appspot.com",
  messagingSenderId: "786118831121",
  appId: "1:786118831121:web:e166ad0063a3701740d5b0",
  measurementId: "G-0WQCVWL0DH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
