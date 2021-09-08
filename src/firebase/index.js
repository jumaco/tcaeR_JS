import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkE1-utFwgu7TocTqh-eE0pboWruCN1u0",
  authDomain: "tcaerjs.firebaseapp.com",
  projectId: "tcaerjs",
  storageBucket: "tcaerjs.appspot.com",
  messagingSenderId: "921572893225",
  appId: "1:921572893225:web:dd45dc96ecad9e40147238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  // getData devuelve la conexion con firestore a mi app
  export const getData = () => getFirestore(app);
  