import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa5JMCEOvCkklMxs1NYPJWhp46FjYREn0",
  authDomain: "shesha-s-steno.firebaseapp.com",
  projectId: "shesha-s-steno",
  storageBucket: "shesha-s-steno.appspot.com",
  messagingSenderId: "516265955183",
  appId: "1:516265955183:web:9f3ae39175ed8c32c4229a",
  measurementId: "G-4XWV5CKDDT"
};

firebase.initializeApp(firebaseConfig);