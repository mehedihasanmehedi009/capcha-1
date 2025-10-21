import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  console.log(children);
  const [user, setUser] = useState(null);
  const authinfo = {
    user,
    setUser,
  };
  return <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
