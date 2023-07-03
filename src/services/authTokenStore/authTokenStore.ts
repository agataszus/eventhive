import { createContext } from "react";

export type AuthTokenContext = {
  token: string;
  setToken: (newToken: string) => void;
};

const initialTokenContext: AuthTokenContext = {
  token: "",
  setToken: () => null,
};

export const AuthTokenContext = createContext(initialTokenContext);
