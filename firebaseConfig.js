// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmtDJhZaq6KUc_MR5tsKbRvkEu_KANOQk",
  authDomain: "reactcrud-9052d.firebaseapp.com",
  projectId: "reactcrud-9052d",
  storageBucket: "reactcrud-9052d.appspot.com",
  messagingSenderId: "668274956037",
  appId: "1:668274956037:web:19f06bc4d0afd92bd1896c",
  measurementId: "G-RY3L5GE6KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase;