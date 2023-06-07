import { useContext } from "react";
import { AuthTokenContext } from "./authTokenStore";

export const useAuthToken = () => {
  return useContext(AuthTokenContext);
};
