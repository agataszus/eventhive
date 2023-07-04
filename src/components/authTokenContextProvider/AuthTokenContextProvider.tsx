import { PropsWithChildren, useEffect, useState } from "react";
import { AuthTokenContext } from "../../services/authTokenStore/authTokenStore";
const LOCAL_STORAGE_TOKEN = "token";

export const AuthTokenContextProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState("");

  const saveToken = (token: string) => {
    setToken(token);
    localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
  };

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal) setToken(tokenLocal);
  }, []);

  const value: AuthTokenContext = {
    token,
    setToken: saveToken,
  };

  return (
    <AuthTokenContext.Provider value={value}>
      {children}
    </AuthTokenContext.Provider>
  );
};
