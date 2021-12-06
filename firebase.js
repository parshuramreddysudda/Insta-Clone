// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDN989MpkwWwpBvFTR2K36biuP-auwosvg",
    authDomain: "instagram-2-clone-ccaa9.firebaseapp.com",
    projectId: "instagram-2-clone-ccaa9",
    storageBucket: "instagram-2-clone-ccaa9.appspot.com",
    messagingSenderId: "973064133039",
    appId: "1:973064133039:web:dfbcab2dff01f637ddf75a",
    measurementId: "G-Y1DEDRP35Q"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

const storage = getStorage();

export { app, db, storage };