// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQHyHVJriwsPRf8XXv7JnC3DxVxKHrej4",
  authDomain: "project-a-cc8b8.firebaseapp.com",
  projectId: "project-a-cc8b8",
  storageBucket: "project-a-cc8b8.appspot.com",
  messagingSenderId: "852220573897",
  appId: "1:852220573897:web:ccddedbc75dadbfd63b518",
  measurementId: "G-G4E9P4LJTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);