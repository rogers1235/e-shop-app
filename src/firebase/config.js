import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCTHL6jT12yem-dW4IYbVgiFMed1TE7PG4",
  authDomain: "eshop-commerce.firebaseapp.com",
  projectId: "eshop-commerce",
  storageBucket: "eshop-commerce.appspot.com",
  messagingSenderId: "1087951922568",
  appId: "1:1087951922568:web:516ea4d28430b8396b463d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
