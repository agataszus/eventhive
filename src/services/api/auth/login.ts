import { RegisterDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getLoginRoute } from "../routes";
import { Tokens } from "./types";

export const login = async (userData: RegisterDto) => {
  const data = await apiClient<RegisterDto, Tokens>({
    method: "POST",
    route: getLoginRoute(),
    payload: userData,
  });

  return data;
};
