import { apiClient } from "../client";
import { getProfileRoute } from "../routes";
import {
  ActionsReturnUserProfileDto,
  CreateUserProfileDto,
  CreateUserProfileOptions,
} from "./types";

export const createUserProfile = async ({
  userData,
  token,
}: CreateUserProfileOptions) => {
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
