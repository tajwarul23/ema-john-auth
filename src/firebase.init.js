// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/getAuth'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1f1fCdsBpC35Sa2FSM9KrU73F_zXrpTM",
  authDomain: "ema-john-simple-49e2b.firebaseapp.com",
  projectId: "ema-john-simple-49e2b",
  storageBucket: "ema-john-simple-49e2b.appspot.com",
  messagingSenderId: "506943509750",
  appId: "1:506943509750:web:165abd99bb275d2bca08d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;