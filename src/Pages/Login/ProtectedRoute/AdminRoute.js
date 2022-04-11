import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  let location = useLocation();
  if (user.email && admin) {
    return children;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-purple-500"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
