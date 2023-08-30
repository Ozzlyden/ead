// FORMA PADRAO DO FIREBASE SDK

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7nzwoOgnXDOWnhSqWTc1_nz4N-S40Hxw",
  authDomain: "ead-curso-dbb67.firebaseapp.com",
  projectId: "ead-curso-dbb67",
  storageBucket: "ead-curso-dbb67.appspot.com",
  messagingSenderId: "11340005407",
  appId: "1:11340005407:web:d8d4b39c1af13a705dd52a",
  measurementId: "G-37125JZPMW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
// FORMA DO PROFESSOR

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // SUAS CREDENCIAIS

  apiKey: "AIzaSyB7nzwoOgnXDOWnhSqWTc1_nz4N-S40Hxw",
  authDomain: "ead-curso-dbb67.firebaseapp.com",
  projectId: "ead-curso-dbb67",
  storageBucket: "ead-curso-dbb67.appspot.com",
  messagingSenderId: "11340005407",
  appId: "1:11340005407:web:d8d4b39c1af13a705dd52a",
  measurementId: "G-37125JZPMW",
});

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db, storage };
*/
