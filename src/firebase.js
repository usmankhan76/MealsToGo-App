import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzlGvbwX6AwlUSU1E1ieQaZqQWDW5LKDI",
  authDomain: "mealstogo-c743c.firebaseapp.com",
  projectId: "mealstogo-c743c",
  storageBucket: "mealstogo-c743c.appspot.com",
  messagingSenderId: "573270525269",
  appId: "1:573270525269:web:47f7acda904c11d3fc5bdc"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);

export const auth=getAuth(app);