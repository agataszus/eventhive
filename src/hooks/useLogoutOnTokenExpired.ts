import { useEffect } from "react";
import { RequestError } from "../services/api/client";
import { useLogout } from "./useLogout";

export const useTokenExpiredCheck = <T extends RequestError>(
  error: T | null
) => {
  const logout = useLogout();

  useEffect(() => {
    if (error?.statusCode === 401) {
      logout();
    }
  }, [error?.statusCode, logout]);
};
