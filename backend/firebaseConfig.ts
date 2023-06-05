import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVtqCCZcQ3wYqMpTokZSxQuW5Pn9QVG90",
  authDomain: "sport-next.firebaseapp.com",
  projectId: "sport-next",
  storageBucket: "sport-next.appspot.com",
  messagingSenderId: "983586181533",
  appId: "1:983586181533:web:d9f8e67155324301c89f74",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
