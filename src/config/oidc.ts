import { AuthProviderProps } from 'react-oidc-context';
import { env } from '@config/env.ts';

// Keycloak OIDC configuration
const oidcConfig: AuthProviderProps = {
  authority: env.OIDC_AUTHORITY,
  client_id: env.OIDC_CLIENT_ID,
  redirect_uri: window.location.origin + "/",
  scope: "openid profile email",
  onSigninCallback: () => {
    const redirectPath = sessionStorage.getItem('redirectPath') || '/';
    sessionStorage.removeItem('redirectPath');
    window.location.replace(redirectPath);
  },
};

export default oidcConfig;