import React, { FC, createContext, useEffect, useState } from "react";
import firebaseApp from "../services/firebase";

export const AuthContext = createContext({});

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
