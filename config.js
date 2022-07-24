import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB3LaFgW049cGxjYYZmdW3w4OTYxEVIL8",
  authDomain: "sowell-5120c.firebaseapp.com",
  projectId: "sowell-5120c",
  storageBucket: "sowell-5120c.appspot.com",
  messagingSenderId: "518586121512",
  appId: "1:518586121512:web:93bdbfa247bb30fcbae41d",
  measurementId: "G-FXJNRCBS6F",
  storageBucket: "gs://sowell-5120c.appspot.com/",
  databaseURL:
    "https://sowell-5120c-default-rtdb.europe-west1.firebasedatabase.app/",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const storage = getStorage(app);

const database = getDatabase(app);

const firestore = getFirestore(app);

export { auth, storage, database, firestore };
