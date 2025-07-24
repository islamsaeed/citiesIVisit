import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = reducer(reducer, initialState);

  function logIn(email, password) {}

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
