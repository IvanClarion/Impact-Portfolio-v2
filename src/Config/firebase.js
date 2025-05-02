
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASY1n4sFH9O2pio8dQONgNzowtlK8mHpw",
  authDomain: "my-portfolio-dynamic-v2.firebaseapp.com",
  projectId: "my-portfolio-dynamic-v2",
  storageBucket: "my-portfolio-dynamic-v2.firebasestorage.app",
  messagingSenderId: "405701587264",
  appId: "1:405701587264:web:a02b5cedca165f6d638aa5",
  measurementId: "G-FWFP5D2ER2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth =getAuth(app);
const storage = getStorage(app)
export {auth, db, storage};
