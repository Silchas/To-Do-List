import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAWm2kEdvDyBmwGDzXaaI5OFvSHQ4_Yn64",
    authDomain: "to-do-bf7e6.firebaseapp.com",
    projectId: "to-do-bf7e6",
    storageBucket: "to-do-bf7e6.appspot.com",
    messagingSenderId: "483694452043",
    appId: "1:483694452043:web:0530ec54ff8520cdf8dcce"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

export const googleProvider = new GoogleAuthProvider()


