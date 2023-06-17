import { apiClient } from "../client";
import { getProfileRoute } from "../routes";
import { CreateUserProfileDto } from "./types";

export const updateUserProfile = async (
  userData: Partial<CreateUserProfileDto>,
  token: string
) => {
  const data = await apiClient({
    method: "PATCH",
    route: getProfileRoute(),
    payload: userData,
    token,
  });

  return data;
};
