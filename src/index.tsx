import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz0Cbl74cTY97keQ3rjowId5Q2GoMiWz0",
  authDomain: "summon-d1a9a.firebaseapp.com",
  projectId: "summon-d1a9a",
  storageBucket: "summon-d1a9a.appspot.com",
  messagingSenderId: "944654783210",
  appId: "1:944654783210:web:ad93366f9778120a83fd93",
  measurementId: "G-L7LL5179GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
