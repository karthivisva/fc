
  // firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9fr-Ql8ztydX1BPepOTBeqKKGk3_Q1j8",
  authDomain: "future-compus.firebaseapp.com",
  projectId: "future-compus",
  storageBucket: "future-compus.appspot.com",
  messagingSenderId: "448456334477",
  appId: "1:448456334477:web:32670227244465b79bd6c4",
}

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
