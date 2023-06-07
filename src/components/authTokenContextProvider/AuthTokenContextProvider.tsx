import { ReactNode, useState } from "react";
import {
  AuthTokenContext,
  authTokenContext,
} from "../../services/authTokenStore/authTokenStore";

type AuthTokenProviderProps = {
  children: ReactNode;
};

export const AuthTokenContextProvider = ({
  children,
}: AuthTokenProviderProps) => {
  const [token, setToken] = useState("");

  const value: authTokenContext = {
    token,
    setToken,
  };

  return (
    <AuthTokenContext.Provider value={value}>
      {children}
    </AuthTokenContext.Provider>
  );
};
