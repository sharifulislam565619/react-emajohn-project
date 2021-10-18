import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confic";


const initialization = () => {
    initializeApp(firebaseConfig);
}

export default initialization;