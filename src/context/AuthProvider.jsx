import { useEffect, useState } from "react";
import auth from "../firebase/firebase_config";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create new user with email and password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email and password
    const signInWithCredentials = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const provider = new GoogleAuthProvider();
    const googleAuth = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // sign out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observer for session check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => { unsubscribe() };
    }, [])


    const authValues = {
        createNewUser,
        signInWithCredentials,
        loading,
        googleAuth,
        user,
        setUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;