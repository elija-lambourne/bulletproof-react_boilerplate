import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { paths } from '@config/paths.ts';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  if (auth.isLoading) {
    return <p>Loading...</p>;
  }

  if (!auth.isAuthenticated) {
    sessionStorage.setItem('redirectPath', window.location.pathname);
    return <Navigate to={paths.auth.login.getHref()} />;
  }

  return <>{children}</>;
}