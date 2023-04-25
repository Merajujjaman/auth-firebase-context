import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../fierbase/firebase.config';


export const UserContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //create user accout with email and password:
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sing in with email and password you have created:
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sing in with google setup:
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser)
            setUser(currentUser);
        })

        return () => {
            unsubscribe()
        }

    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    }


    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    )
};

export default AuthProvider;