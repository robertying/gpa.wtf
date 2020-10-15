import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  CognitoUserSession,
  CookieStorage,
} from "amazon-cognito-identity-js";

const domain =
  process.env.NODE_ENV === "production" ? "thu.community" : "localhost";
const secure = process.env.NODE_ENV === "production" ? true : false;

const clientUserPool = new CognitoUserPool({
  UserPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID!,
  ClientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
  Storage: new CookieStorage({ domain, secure, sameSite: "strict" }),
});

export const getUserSession = () => {
  return new Promise<{
    user: CognitoUser;
    session: CognitoUserSession;
  }>((resolve, reject) => {
    const cognitoUser = clientUserPool.getCurrentUser();

    if (!cognitoUser) {
      return reject(null);
    }

    cognitoUser.getSession(function (
      err: Error,
      session: CognitoUserSession | null
    ) {
      if (err || !session) {
        return reject(err);
      }

      return resolve({ user: cognitoUser, session });
    });
  });
};

export const getUserAttributes = (user: CognitoUser) => {
  return new Promise<CognitoUserAttribute[]>((resolve, reject) => {
    user.getSession(function (err: Error, session: CognitoUserSession | null) {
      if (err || !session) {
        return reject(err);
      }

      user.getUserAttributes((err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  });
};

export const getUserId = (user: CognitoUser) => {
  return new Promise<string | undefined>(async (resolve, reject) => {
    try {
      const result = await getUserAttributes(user);
      return resolve(result.find((v) => v.getName() === "sub")?.getValue());
    } catch (e) {
      return reject(e);
    }
  });
};
