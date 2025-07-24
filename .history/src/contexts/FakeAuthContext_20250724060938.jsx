import React, { createContext, useState } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  <AuthContext.Provider> {children}</AuthContext.Provider>;
}
