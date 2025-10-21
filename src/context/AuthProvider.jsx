import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
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
  const [Loading, setLoading] = useState(true);


  const createUserWithEmailAndPasswordfun = (email, password) => {
     setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignUserWithEmailAndPasswordfun = (email, password) => {
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateProfilefun = (displayName, photoURL) => {
     setLoading(true)
    return updateProfile( auth.currentUser, { displayName, photoURL });
  };

  const sendEmailVerificationfun = () => {
     setLoading(true)
    return sendEmailVerification( auth.currentUser);
  };

  const googlesing = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubsing = () => {
     setLoading(true)
    return signInWithPopup(auth, GitHubprovider);
  };
  const signOutfun = () => {
      setLoading(true)
    return signOut(auth);
  };
  const sendpassword = (email) => {
    setLoading(true)
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
     sendEmailVerificationfun,
     setLoading,
     Loading

  };
    
useEffect(()=>{
const unSubscribe  = onAuthStateChanged(auth,(CurrentUser)=>{
    setUser(CurrentUser)
    setLoading(false)
  })
   return() =>{
   unSubscribe()
   }
},[])

 

 
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
