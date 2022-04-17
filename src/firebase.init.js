import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
    apiKey: "AIzaSyC0LzaG3j5z87rUtYjTM7EEVsQpKitnPM0",
    authDomain: "gym-trainer-project-a10.firebaseapp.com",
    projectId: "gym-trainer-project-a10",
    storageBucket: "gym-trainer-project-a10.appspot.com",
    messagingSenderId: "1073734141485",
    appId: "1:1073734141485:web:51ed195b828a101a399aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;