import React from "react";

import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Navigate, Outlet } from "react-router";

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  //   return currentUser ? <Outlet /> : <Navigate to="/signin" />;
  return <Outlet />;
}

export default RequireAuth;
