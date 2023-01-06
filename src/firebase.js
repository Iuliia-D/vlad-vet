import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApcKgx6e-Zr9dAZ8vZ9qEFVIH3oSSB-o0",
  authDomain: "vlad-vet.firebaseapp.com",
  projectId: "vlad-vet",
  storageBucket: "vlad-vet.appspot.com",
  messagingSenderId: "454106686785",
  appId: "1:454106686785:web:caaba7beac0a159e3aadc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
