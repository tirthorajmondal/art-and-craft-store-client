import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebse/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    //create account
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Mail Sign In
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //logout
    const logout = () => {
        return signOut(auth);
    }

    const authInfo = {
        googleSignIn,
        user,
        setUser,
        logout,
        handleSignUp,
        handleSignIn,

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            if (currentUser) {
                setUser(currentUser)
            }
        })
        return () => unSubscribe()
    }, [])



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;