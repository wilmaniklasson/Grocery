// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCV5j4WK4FT5evjVLvSR_ovDQSIEOgCseY",
  authDomain: "shopping-list-5a240.firebaseapp.com",
  projectId: "shopping-list-5a240",
  storageBucket: "shopping-list-5a240.appspot.com",
  messagingSenderId: "577574875963",
  appId: "1:577574875963:web:581e3621555e301e2f3d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{ db }


