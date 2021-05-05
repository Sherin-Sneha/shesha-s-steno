import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCRvxLdRNmFQ625MJ6k9vvUm2k-DOIJApU",
  authDomain: "steno-ac5c3.firebaseapp.com",
  projectId: "steno-ac5c3",
  storageBucket: "steno-ac5c3.appspot.com",
  messagingSenderId: "982680128565",
  appId: "1:982680128565:web:8d518300c0ae7110ff757c",
  measurementId: "G-B74Z2YK0H7"
};

firebase.initializeApp(firebaseConfig);