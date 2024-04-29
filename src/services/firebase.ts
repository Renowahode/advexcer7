// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyCNOkZ16eoLNlT3qIaHHr7PZWhExEwBSdM",
  authDomain: "cuadra-54913.firebaseapp.com",
  projectId: "cuadra-54913",
  storageBucket: "cuadra-54913.appspot.com",
  messagingSenderId: "1045446598574",
  appId: "1:1045446598574:web:0ce1af2f7985c5ca9c323f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
