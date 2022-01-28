import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getDatabase } from "firebase/database";

const initializationFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
}

export default initializationFirebase;