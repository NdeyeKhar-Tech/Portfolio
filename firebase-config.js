// firebase-config.js
// Importation des modules Firebase nécessaires
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

    //Configurations personnelles

    // Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTXkNT_sxEHmKHHdhuGZzCk-P-JRnGUY",
  authDomain: "portfolio-khar-tall.firebaseapp.com",
  projectId: "portfolio-khar-tall",
  storageBucket: "portfolio-khar-tall.firebasestorage.app",
  messagingSenderId: "85501095345",
  appId: "1:85501095345:web:318a89163b83f03623a190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
