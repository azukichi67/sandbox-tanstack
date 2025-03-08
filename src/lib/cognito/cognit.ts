import { ResourcesConfig } from "aws-amplify";

const env = import.meta.env;

export const config: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: env.VITE_COGNITO_USER_POOL_ID,
      userPoolClientId: env.VITE_COGNITO_USER_POOL_CLIENT_ID,
      loginWith: {
        oauth: {
          domain: env.VITE_COGNITO_MANAGED_LOGIN_DOMAIN,
          scopes: ["openid"],
          redirectSignIn: [env.VITE_COGNITO_LOGIN_REDIRECT_PATH],
          redirectSignOut: [env.VITE_COGNITO_LOGOUT_REDIRECT_PATH],
          responseType: "code",
        },
      },
    },
  },
};

export const signOutRedirect = () => {
  const clientId = env.VITE_COGNITO_USER_POOL_CLIENT_ID;
  const logoutUri = env.VITE_COGNITO_LOGOUT_REDIRECT_PATH;
  const cognitoDomain = env.VITE_COGNITO_MANAGED_LOGIN_DOMAIN;
  window.location.href = `https://${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};
