// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9J351SJQXYXHBXopMA1zxfp2FEhr_dpo",
  authDomain: "whatsapp-clone-93bf8.firebaseapp.com",
  projectId: "whatsapp-clone-93bf8",
  storageBucket: "whatsapp-clone-93bf8.appspot.com",
  messagingSenderId: "41108864684",
  appId: "1:41108864684:web:bf2492b966a9a9a09fe909",
  measurementId: "G-2XLGQWJ8HR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
