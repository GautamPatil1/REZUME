// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, onValue } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2zggT-V6eWeAZmRjMGklxJ7CKGzUOfvY",
  authDomain: "rezume-a5269.firebaseapp.com",
  projectId: "rezume-a5269",
  storageBucket: "gs://rezume-a5269.appspot.com", // Fix duplicate key
  messagingSenderId: "60826985488",
  appId: "1:60826985488:web:2637058eb25c03f5d39695",
  measurementId: "G-RVFTFZWE97",
  databaseURL: "https://rezume-a5269-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function checkLink(link) {
  const db = getDatabase();
  const resultRef = ref(db, link);
  
  return new Promise((resolve, reject) => {
    get(resultRef).then((snapshot) => {
      if (snapshot.exists()) {
        resolve(true);
      } else {
        resolve(false);
      }
    }).catch((error) => {
      console.error("Error checking links:", error);
      reject(error);
    });
  });
}

function writeUserData(name, link, file) {
  const db = getDatabase();
  set(ref(db, link), {
    name: name,
    link: link,
    file: file,
  });
}

async function readUserData(link) {
  const db = getDatabase();
  const resultRef = ref(db, link);
  
  return new Promise((resolve, reject) => {
    onValue(resultRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    }, {
      onlyOnce: true // Ensures the listener is removed after the first event
    });
  });
}

export { app, writeUserData, readUserData, checkLink }; // Export app, database, ref (renamed from dbRef), and set functions
