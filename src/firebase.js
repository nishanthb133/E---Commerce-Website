// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMoUdGgZoQJpaDhmEbg8h7cYChJd1bT60",
  authDomain: "nova-shopping-c3e6e.firebaseapp.com",
  projectId: "nova-shopping-c3e6e",
  storageBucket: "nova-shopping-c3e6e.firebasestorage.app",
  messagingSenderId: "229719166573",
  appId: "1:229719166573:web:44b77b42247caab2dcb964",
  measurementId: "G-STSDDGFE8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
