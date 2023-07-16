import { RegisteredUserDto } from "../auth/types";
import { apiClient } from "../client";
import { getProfileRoute } from "../routes";
import { UpdateUserProfileDto, UpdateUserProfileOptions } from "./types";

export const updateUserProfile = async ({
  userData,
  token,
}: UpdateUserProfileOptions) => {
  const data = await apiClient<UpdateUserProfileDto, RegisteredUserDto>({
    method: "PATCH",
    route: getProfileRoute(),
    payload: userData,
    token,
  });

  return data;
};
