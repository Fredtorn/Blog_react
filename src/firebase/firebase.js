import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmRMQJi-WYFbWSPmFuGV5VeLTexTMxRAc",
    authDomain: "blog-react-9da9e.firebaseapp.com",
    projectId: "blog-react-9da9e",
    storageBucket: "blog-react-9da9e.appspot.com",
    messagingSenderId: "199093197802",
    appId: "1:199093197802:web:94ab9903d4859c012ef093"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };