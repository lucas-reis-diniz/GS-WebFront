import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeF66W6qWwQvXCr9jnJ9QOMgPiiLgON7s",
  authDomain: "gs-webfront.firebaseapp.com",
  projectId: "gs-webfront",
  storageBucket: "gs-webfront.appspot.com",
  messagingSenderId: "1000059923359",
  appId: "1:1000059923359:web:36fe3f5f0efce9ead46baa",
  measurementId: "G-6M24F0FHH1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};