import React, { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
  const [isAuthenticated] = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated]
  );
  return children;
}

export default ProtectedRoute;
