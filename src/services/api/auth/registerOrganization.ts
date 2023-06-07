import { RegisterDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getRegisterOrganizationRoute } from "../routes";
import { RegisteredUserDto } from "./types";

export const registerOrganization = async (userData: RegisterDto) => {
  const data = await apiClient<RegisterDto, RegisteredUserDto>({
    method: "POST",
    route: getRegisterOrganizationRoute(),
    payload: userData,
  });

  return data;
};
