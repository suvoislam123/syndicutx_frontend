// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNfs4dJqTPy6cQvbX1Trm2k9ZRWIwcJDo",
    authDomain: "syndicutx-shop.firebaseapp.com",
    projectId: "syndicutx-shop",
    storageBucket: "syndicutx-shop.appspot.com",
    messagingSenderId: "1012756856726",
    appId: "1:1012756856726:web:352e95fe95b346205de7b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;