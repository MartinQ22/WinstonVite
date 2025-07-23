import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7Xv_UcbFWX7boaugzv2VM3iR2Vlf2qPE",
  authDomain: "data-winston.firebaseapp.com",
  projectId: "data-winston",
  storageBucket: "data-winston.firebasestorage.app",
  messagingSenderId: "1037300591901",
  appId: "1:1037300591901:web:06180e20581e70bd7045f4"
};

export const app = initializeApp(firebaseConfig);
