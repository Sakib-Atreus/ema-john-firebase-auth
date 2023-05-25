// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsO6HgXI5sJKTtLLVAsiWUNIihh3yHWBQ",
  authDomain: "ema-john-with-firebase-a-50eda.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-50eda",
  storageBucket: "ema-john-with-firebase-a-50eda.appspot.com",
  messagingSenderId: "1012276250118",
  appId: "1:1012276250118:web:9c005a6a03f1972add2587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;