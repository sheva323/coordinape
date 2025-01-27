import { AuthClient, RestliClient } from 'linkedin-api-client';

const authClient = new AuthClient({
  clientId: process.env.LINKEDIN_CLIENT_ID ?? '',
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? '',
  redirectUrl: process.env.LINKEDIN_OAUTH2_REDIRECT_URL ?? '',
});

const restliClient = new RestliClient();
restliClient.setDebugParams({ enabled: true });

export const generateAuthURL = (state: string) => {
  return authClient.generateMemberAuthorizationUrl(
    ['openid', 'email', 'profile'],
    state
  );
};

export const getAccessToken = async (code: string) => {
  return await authClient.exchangeAuthCodeForAccessToken(code);
};

export type UserInfo = {
  sub: string;
  email_verified: boolean;
  name: string;
  locale: {
    country: string;
    language: string;
  };
  given_name: string;
  family_name: string;
  email: string;
  picture?: string;
};

export const getUserInfo = async (accessToken: string) => {
  const res = await restliClient.get({
    resourcePath: '/userinfo',
    accessToken,
  });

  const ui = res.data as UserInfo;
  return ui;
};
