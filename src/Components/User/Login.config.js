// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhBS0cIrBUatN8g-9Aga6ncmlIKAmVvRs",
  authDomain: "palnetearth-yoga.firebaseapp.com",
  projectId: "palnetearth-yoga",
  storageBucket: "palnetearth-yoga.appspot.com",
  messagingSenderId: "685970608061",
  appId: "1:685970608061:web:b54d30cf34866844018cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app