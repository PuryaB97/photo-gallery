import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfLTfCNCjhj0akw-gffbCyJR4_Y5rC2Xo",
  authDomain: "purya-firegram.firebaseapp.com",
  projectId: "purya-firegram",
  storageBucket: "purya-firegram.appspot.com",
  messagingSenderId: "146774014928",
  appId: "1:146774014928:web:a2e530af05b951640ed7d5",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
