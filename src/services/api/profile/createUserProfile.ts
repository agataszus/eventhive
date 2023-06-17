import { apiClient } from "../client";
import { getProfileRoute } from "../routes";
import { ActionsReturnUserProfileDto, CreateUserProfileDto } from "./types";

export const createUserProfile = async (
  userData: CreateUserProfileDto,
  token: string
) => {
  const data = await apiClient<
    CreateUserProfileDto,
    ActionsReturnUserProfileDto
  >({
    method: "POST",
    route: getProfileRoute(),
    payload: userData,
    token,
  });

  return data;
};
