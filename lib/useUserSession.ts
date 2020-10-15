import { useState } from "react";
import { CognitoUserSession, CognitoUser } from "amazon-cognito-identity-js";
import { getUserSession } from "./cognito";
import useInterval from "./useInterval";

const useUserSession = (poll?: boolean) => {
  const [user, setUser] = useState<CognitoUser | null>();
  const [session, setSession] = useState<CognitoUserSession | null>();

  const callback = async () => {
    try {
      const { user, session } = await getUserSession();
      setUser(user);
      setSession(session);
    } catch (e) {
      setUser(null);
      setSession(null);
    }
  };

  useInterval(callback, poll ? 45 * 60 * 1000 : null);

  return { user, session };
};

export default useUserSession;
