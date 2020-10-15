import { useState, useEffect } from "react";
import useUserSession from "./useUserSession";
import { getUserId } from "./cognito";

const useUserId = () => {
  const { user } = useUserSession();

  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      if (user) {
        const userId = await getUserId(user);
        setUserId(userId);
      }
    })();
  }, [user]);

  return userId;
};

export default useUserId;
