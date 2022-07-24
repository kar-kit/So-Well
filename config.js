import * as firebase from "firebase";
import { initializeApp } from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

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
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth, firebase };
