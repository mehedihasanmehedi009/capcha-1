import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const GitHubprovider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [users, setUser] = useState(null);

  const createUserWithEmailAndPasswordfun = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignUserWithEmailAndPasswordfun = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateProfilefun = (displayName, photoURL) => {
    return updateProfile( auth.currentUser, { displayName, photoURL });
  };

  const sendEmailVerificationfun = () => {
    return sendEmailVerification( auth.currentUser);
  };

  const googlesing = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubsing = () => {
    return signInWithPopup(auth, GitHubprovider);
  };
  const signOutfun = () => {
    return signOut(auth);
  };
  const sendpassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authinfo = {
    users,
    setUser,
    createUserWithEmailAndPasswordfun,
    SignUserWithEmailAndPasswordfun,
    googlesing,
    gitHubsing,
    signOutfun,
    sendpassword,
    updateProfilefun,
     sendEmailVerificationfun 
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
