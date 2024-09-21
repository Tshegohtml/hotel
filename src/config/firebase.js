// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGZV2NYchSOHZswQWp5mcXxI4fEDlad70",
  authDomain: "star-hotel-655ab.firebaseapp.com",
  projectId: "star-hotel-655ab",
  storageBucket: "star-hotel-655ab.appspot.com",
  messagingSenderId: "609207343267",
  appId: "1:609207343267:web:c6ea4c62846625ec650716",
  measurementId: "G-4XPX0JB7J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export{auth, db}