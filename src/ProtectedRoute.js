import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.js";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
