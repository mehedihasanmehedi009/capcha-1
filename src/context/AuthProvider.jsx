import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUserWithEmailAndPasswordfun = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authinfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordfun,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
