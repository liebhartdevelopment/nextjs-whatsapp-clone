import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9cs9Y4mmx7-HdG1aqSLF0q7L02MKaPOw",
  authDomain: "whatsapp-clone-28f69.firebaseapp.com",
  projectId: "whatsapp-clone-28f69",
  storageBucket: "whatsapp-clone-28f69.appspot.com",
  messagingSenderId: "346707642509",
  appId: "1:346707642509:web:ed382ca1903603368e7ac4",
  measurementId: "G-WVDL1F8LLG",
}

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
