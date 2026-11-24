import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA10-6ieD-hzwBIbmBSMtGCg_5jGEsuQsg",
  authDomain: "listening-85a1a.firebaseapp.com",
  databaseURL: "https://listening-85a1a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "listening-85a1a",
  storageBucket: "listening-85a1a.firebasestorage.app",
  messagingSenderId: "384135584303",
  appId: "1:384135584303:web:2ab90ea12cd1a9f10404da",
  measurementId: "G-0N2D40VYYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
