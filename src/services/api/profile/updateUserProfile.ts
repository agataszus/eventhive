import { apiClient } from "../client";
import { getProfileRoute } from "../routes";
import { UpdateUserProfileDto } from "./types";

export const updateUserProfile = async (
  userData: UpdateUserProfileDto,
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
