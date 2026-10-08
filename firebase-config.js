import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "TU_APIKEY",
    authDomain: "TU_AUTHDOMAIN",
    projectId: "TU_PROJECTID",
    storageBucket: "TU_STORAGEBUCKET",
    messagingSenderId: "TU_MESSAGINGSENDERID",
    appId: "TU_APPID",
    measurementId: "TU_MEASUREMENTID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
