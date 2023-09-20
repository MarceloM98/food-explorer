import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    api.get("users/validate").catch((error) => {
      if (error.response?.status === 401) {
        signOut();
      }
    });
  }, []);

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
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
