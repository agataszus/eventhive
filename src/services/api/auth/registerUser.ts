import { RegisterDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getRegisterUserRoute } from "../routes";
import { RegisteredUserDto } from "./types";

export const registerUser = async (userData: RegisterDto) => {
  const data = await apiClient<RegisterDto, RegisteredUserDto>({
    method: "POST",
    route: getRegisterUserRoute(),
    payload: userData,
  });

  return data;
};
