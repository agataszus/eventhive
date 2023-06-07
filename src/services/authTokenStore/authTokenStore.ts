import { createContext } from "react";

export type authTokenContext = {
  token: string;
  setToken: (newToken: string) => void;
};

const initialTokenContext: authTokenContext = {
  token: "",
  setToken: () => null,
};

export const AuthTokenContext = createContext(initialTokenContext);
