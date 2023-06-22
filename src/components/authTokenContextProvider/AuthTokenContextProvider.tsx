import { ReactNode, useEffect, useState } from "react";
import { AuthTokenContext } from "../../services/authTokenStore/authTokenStore";

type AuthTokenProviderProps = {
  children: ReactNode;
};

export const AuthTokenContextProvider = ({
  children,
}: AuthTokenProviderProps) => {
  const [token, setToken] = useState("");

  const saveToken = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
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
