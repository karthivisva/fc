import React from "react";
import { Navigate } from "react-router-dom"; // Import Navigate instead of Redirect
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    // Use Navigate to redirect user if not authenticated
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
