import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiC5cxeSek-vdZ-aGzlZezwku4X-PfiWA",
  authDomain: "ottonova-bb484.firebaseapp.com",
  projectId: "ottonova-bb484",
  storageBucket: "ottonova-bb484.appspot.com",
  messagingSenderId: "854615890992",
  appId: "1:854615890992:web:b5ed007267af9b9ed821f5",
  measurementId: "G-5S4FTDJYVM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);