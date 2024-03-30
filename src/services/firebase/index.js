
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBMfEkyTaiduw9s2uHJp29--syqTr-VKZA",
  authDomain: "entregafinal-coder.firebaseapp.com",
  projectId: "entregafinal-coder",
  storageBucket: "entregafinal-coder.appspot.com",
  messagingSenderId: "1040770294938",
  appId: "1:1040770294938:web:c0864e9a92beddc4306b23"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)