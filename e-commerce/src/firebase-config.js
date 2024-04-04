// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQW8F83IwJqaHLptzJN8tzb5GyN_UDFTw",
    authDomain: "e-commerce-e5107.firebaseapp.com",
    projectId: "e-commerce-e5107",
    storageBucket: "e-commerce-e5107.appspot.com",
    messagingSenderId: "804769427257",
    appId: "1:804769427257:web:19945a3972b5035990c2e8",
    measurementId: "G-6L1NMTTZ21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud storage and get a reference to the service
export const storage = getStorage(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
