import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYlqK1B73eVRY1rcRFIdHGcX6Brk_tU3U",
  authDomain: "dhishna-2d49d.firebaseapp.com",
  projectId: "dhishna-2d49d",
  storageBucket: "dhishna-2d49d.appspot.com",
  messagingSenderId: "71260517784",
  appId: "1:71260517784:web:7231ab9833a7f6829627ed",
  measurementId: "G-XG03QBCV8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export {app}
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);