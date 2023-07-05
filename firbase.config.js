import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAfLNQzNTAjqHXmgby72YeE1676vu4HVys",
    authDomain: "ksd-corp.firebaseapp.com",
    projectId: "ksd-corp",
    storageBucket: "ksd-corp.appspot.com",
    messagingSenderId: "1049829848192",
    appId: "1:1049829848192:web:b6129d6a2ae36c273c6265",
    measurementId: "G-XJM38SS7MK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;