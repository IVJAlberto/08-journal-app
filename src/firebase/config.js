// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUk2CGo9cazw4qrcybthUI578QTG4W63E",
  authDomain: "react-cursos-32905.firebaseapp.com",
  projectId: "react-cursos-32905",
  storageBucket: "react-cursos-32905.appspot.com",
  messagingSenderId: "773111122313",
  appId: "1:773111122313:web:8e309962f9f4c1daf73958"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// export const FirebaseStorage = getStorage(FirebaseApp);
