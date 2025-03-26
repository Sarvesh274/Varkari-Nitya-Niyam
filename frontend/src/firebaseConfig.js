// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABAmX85nsg4PSZK66R4kpCeaNsf4JMM4s",
    authDomain: "varkari-nitya-niyam.firebaseapp.com",
    projectId: "varkari-nitya-niyam",
    storageBucket: "varkari-nitya-niyam.firebasestorage.app",
    messagingSenderId: "970037025921",
    appId: "1:970037025921:web:f9f0276a7b7510eb134180",
    measurementId: "G-RB6LP7FKW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
