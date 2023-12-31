import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsOJQ6l4aFcWLWCYr8_-y4YUltoD1Wf4w",
    authDomain: "clone-4e04b.firebaseapp.com",
    projectId: "clone-4e04b",
    storageBucket: "clone-4e04b.appspot.com",
    messagingSenderId: "894534528736",
    appId: "1:894534528736:web:0ea0dab457eb25335cea85",
    measurementId: "G-QHJP2C025Q"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };