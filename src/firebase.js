import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

function checkLink(link) {
  const db = getDatabase();
  const resultRef = ref(db, link);

  return new Promise((resolve, reject) => {
    get(resultRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((error) => {
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
    onValue(
      resultRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      {
        onlyOnce: true, // Ensures the listener is removed after the first event
      }
    );
  });
}


export { app, writeUserData, readUserData, checkLink, signInWithPopup, provider, auth, GoogleAuthProvider };
