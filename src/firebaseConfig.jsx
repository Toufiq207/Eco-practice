// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh1uyw2_BFENHJZbt8VFaRzO8dLsbrBLU",
  authDomain: "todo-b2ed7.firebaseapp.com",
  databaseURL: "https://todo-b2ed7-default-rtdb.firebaseio.com",
  projectId: "todo-b2ed7",
  storageBucket: "todo-b2ed7.firebasestorage.app",
  messagingSenderId: "500045392332",
  appId: "1:500045392332:web:e58e150bd753e7a7f8d569",
  measurementId: "G-J6D8B6QCJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig