import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


export const createNewUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => {
    return auth.signOut();
}

