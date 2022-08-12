import { getAuth }  from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4zLTYy23lriOH1Z8EcZJlMZ0TOZU2RBY",
  authDomain: "react-auth-b7f12.firebaseapp.com",
  projectId: "react-auth-b7f12",
  storageBucket: "react-auth-b7f12.appspot.com",
  messagingSenderId: "162070513896",
  appId: "1:162070513896:web:df639dfaa3d771b044e15d"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore (FirebaseApp)