import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase.init";

const AuthProvider = ({ children }) => {
  // getting the user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // function to register user with email and password
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // function to sign in with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // function to sign in user with email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   function to update an existing user
  const updateUser = (updatedUserData) => {
    return updateProfile(auth.currentUser, updatedUserData);
  };

  //   function to logout user
  const logoutUser = () => {
    return signOut(auth);
  };

  //  monitor and get currently signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    registerUser,
    signInUser,
    updateUser,
    logoutUser,
    user,
    setUser,
    loading,
    setLoading,
    signInWithGoogle
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
