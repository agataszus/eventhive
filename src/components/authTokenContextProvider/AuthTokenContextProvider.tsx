import { PropsWithChildren, useState } from "react";
import { AuthTokenContext } from "../../services/authTokenStore/authTokenStore";

const LOCAL_STORAGE_TOKEN_KEY = "token";
const LOCAL_STORAGE_TOKEN = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

export const AuthTokenContextProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState(LOCAL_STORAGE_TOKEN ?? "");

  const saveToken = (token: string) => {
    setToken(token);
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
  };

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
