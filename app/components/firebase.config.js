// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiV9L3b8uA4SmtI12ZB_ubYw6CfKnW4wA",
  authDomain: "authapp-5732f.firebaseapp.com",
  projectId: "authapp-5732f",
  storageBucket: "authapp-5732f.appspot.com",
  messagingSenderId: "834866427570",
  appId: "1:834866427570:web:cd5edd7bbad8c39d0abbab",
  measurementId: "G-6X7E414JW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
