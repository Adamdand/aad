import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const authenticate = getAuth(app);

export const dataBase = getDatabase();

export const functions = getFunctions(app);
export const db = getFirestore(app);


export const sendEmailDataToFirestore = (name: string, email: string, message: string) => {
  // Create a new document in a Firestore collection
  const contactsCollection = collection(db, "email");

  console.log("contactsCollection", contactsCollection)

  const data = {
    name: name,
    email: email,
    message: message
  };

  addDoc(contactsCollection, data)
    // .then((docRef) => {
    //   console.log("Data added with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //   console.error("Error adding data: ", error);
    // });
}