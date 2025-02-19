// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-6790e.firebaseapp.com",
  projectId: "real-state-6790e",
  storageBucket: "real-state-6790e.firebasestorage.app",
  messagingSenderId: "800444929616",
  appId: "1:800444929616:web:0106928e69c40ff20ea355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;