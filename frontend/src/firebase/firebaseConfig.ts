import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// IMPORTANT: config
const firebaseConfig = {
  apiKey: "AIzaSyAtbrNMLrBIkRFT76yFDnKcKzzIaHhFyC8",
  authDomain: "jeyam-auth.firebaseapp.com",
  projectId: "jeyam-auth",
  storageBucket: "jeyam-auth.firebasestorage.app",
  messagingSenderId: "382347935210",
  appId: "1:382347935210:web:5c4f6ffb45edefdd9e4693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
