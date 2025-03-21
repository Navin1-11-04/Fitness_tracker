// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyGX0cgSpPczXNPfErthuX0RoIxe_if8o",
  authDomain: "fitness-tracker-3c74c.firebaseapp.com",
  projectId: "fitness-tracker-3c74c",
  storageBucket: "fitness-tracker-3c74c.appspot.app",
  messagingSenderId: "549976877185",
  appId: "1:549976877185:web:c7c201f3f6df8b792ec580",
  measurementId: "G-XPQMGMW3S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };