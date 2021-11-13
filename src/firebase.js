import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsqjKmF_OyYW8q1wc0VFzwWS0OCuyBNJU",
  authDomain: "discord-clone-652ad.firebaseapp.com",
  projectId: "discord-clone-652ad",
  storageBucket: "discord-clone-652ad.appspot.com",
  messagingSenderId: "1016365164936",
  appId: "1:1016365164936:web:2444fe13ec9a3fb063f23d",
  measurementId: "G-65RPNZZN18"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth};
export {provider};
export default db;
export {firebaseApp};

