import React, { createContext, useState, useContext } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext();
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
}
export { AuthProvider, useAuth };
