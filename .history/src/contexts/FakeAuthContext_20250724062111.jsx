import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = reducer(reducer, initialState);

  function logIn() {}

  function logOut() {}

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

//useAuth hook to access the context
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
export { AuthProvider, useAuth };
