import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { user } = useAuth();

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return;
      case USER_ROLE.CUSTOMER:
        return;
      default:
        return;
    }
  }

  return (
    <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}
