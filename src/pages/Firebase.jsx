// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkpfyo1OH1uMl6nbwfucOLAQZOvnls240",
  authDomain: "auth-08-07-2006.firebaseapp.com",
  projectId: "auth-08-07-2006",
  storageBucket: "auth-08-07-2006.firebasestorage.app",
  messagingSenderId: "297616855662",
  appId: "1:297616855662:web:4b9ee6306da94744cf4c7f",
  measurementId: "G-S2PW1XGP5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;

