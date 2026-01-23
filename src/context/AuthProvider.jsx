import { useState } from "react";
import auth from "../firebase/firebase_config";
import AuthContext from "./AuthContext";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

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

    const authValues = {
        signInWithCredentials,
        loading,
        googleAuth
    }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;