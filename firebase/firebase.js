import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDstfTC7uQx0OBqW5wiFFSC_Zc8camGuns",
  authDomain: "blog-app-53a35.firebaseapp.com",
  projectId: "blog-app-53a35",
  storageBucket: "blog-app-53a35.firebasestorage.app",
  messagingSenderId: "25654555703",
  appId: "1:25654555703:web:4ad7c4728332b259be7bb2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);