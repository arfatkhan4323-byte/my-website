import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyCmEZpxFoG3o7xgi9Wzz4Ar8ZfYXN2fOKc",
    authDomain: "myreactapp-1fe8b.firebaseapp.com",
    projectId: "myreactapp-1fe8b",
    storageBucket: "myreactapp-1fe8b.firebasestorage.app",
    messagingSenderId: "101462600188",
    appId: "1:101462600188:web:8038c46b7df0dc9e2dea79",
    measurementId: "G-K4MM9GBVQT"
  };


const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
