import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See the instructions provided in the chat for how to find these values!
const firebaseConfig = {
  apiKey: "AIzaSyA_PYO4KNJotbd91LIPc2rQ0vg_LJPaco",
  authDomain: "official-gloom.firebaseapp.com",
  projectId: "official-gloom",
  storageBucket: "official-gloom.firebasestorage.app",
  messagingSenderId: "407134965172",
  appId: "1:407134965172:web:1e3d6701a32bbb5968b6e1",
  measurementId: "G-ZTX4HTT1EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services and export them for use in your app
export const db = getFirestore(app);
export const auth = getAuth(app);
