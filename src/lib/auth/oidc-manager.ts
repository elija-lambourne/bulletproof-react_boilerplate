import { User } from "oidc-client-ts"
import { env } from "@config/env.ts"

export const getUser = () => {
  const oidcStorage = sessionStorage.getItem(`oidc.user:${env.OIDC_AUTHORITY}:${env.OIDC_CLIENT_ID}`);
  if (!oidcStorage) {
    return null;
  }

  return User.fromStorageString(oidcStorage);
}