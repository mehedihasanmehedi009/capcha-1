// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaThgDcO6nm-1PSIa92P2vA4D_bUrqocU",
  authDomain: "capcha-d0a00.firebaseapp.com",
  projectId: "capcha-d0a00",
  storageBucket: "capcha-d0a00.firebasestorage.app",
  messagingSenderId: "451124157109",
  appId: "1:451124157109:web:f8c68b94e3c6382a6cfcfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);