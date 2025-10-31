import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

import toast, { Toaster } from "react-hot-toast";
const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message || "Error Happened");

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [isEmail, setEmail] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = (curentUser, userInfo) => {
        setLoading(true);
        return updateProfile(curentUser, userInfo);
    };
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    const info = {
        user,
        loading,
        isEmail,
        setEmail,
        signUpUser,
        signOutUser,
        signInUser,
        updateUserProfile,
        setLoading,
        notifySuccess,
        notifyError,
        googleSignIn,
        resetPassword,
    };
    return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;
