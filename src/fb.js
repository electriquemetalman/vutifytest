//import { initializeApp } from "@firebase/app";
import firebase from 'firebase/compat/app';
//import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore';
  
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALIO2jEeiqK3YxXlZ33IdBHWUMlTObgUQ",
  authDomain: "codingtest-79786.firebaseapp.com",
  projectId: "codingtest-79786",
  storageBucket: "codingtest-79786.appspot.com",
  messagingSenderId: "523037041341",
  appId: "1:523037041341:web:a34e4b05f8877e95458dd4",
  measurementId: "G-H0KPQ4G6S3"
};
// Initialize Firebase

const config = firebaseConfig;
firebase.initializeApp(config);
const db = firebase.firestore();

//Fin d'initialisation 

db.settings({ timestampsInSnapshots: true });

export default db;