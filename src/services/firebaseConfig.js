import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@reat-native-async-storage/async-storage"

const firebaseConfig = {
    apiKey: "AIzaSyA6QftI6S8wmL1dlzAxlSC54ZK2ATTxz6E",
    authDomain: "formadora3-8703f.firebaseapp.com",
    projectId: "formadora3-8703f",
    storageBucket: "formadora3-8703f.firebasestorage.app",
    messagingSenderId: "495784029770",
    appId: "1:495784029770:web:73d8d2b58d3bc32383c0b3",
    measurementId: "G-566SDZLT8P"
  };


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };