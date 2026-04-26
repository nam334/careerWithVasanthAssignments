import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  if (allowedRoles && !allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" />;
  return <Outlet />;
};

export default ProtectedRoute;
