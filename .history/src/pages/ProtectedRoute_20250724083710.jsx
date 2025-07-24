import React from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
  const [isAuthenticated] = useAuth();
  const navigate = useNavigate();

  return children;
}

export default ProtectedRoute;
