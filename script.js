// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLpOAcZx919tFHTzN3R9a3a-aRhOiG6RI",
  authDomain: "writer-blog-21.firebaseapp.com",
  projectId: "writer-blog-21",
  storageBucket: "writer-blog-21.appspot.com",
  messagingSenderId: "986595186275",
  appId: "1:986595186275:web:a20f3e931330e48f458a56",
  measurementId: "G-9JWSKQKSVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);