import { ProfileDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getProfileRoute } from "../routes";

export type UpdateUserProfileDto = {
  firstName?: string;
  lastName?: string;
  region?: ProfileDto.RegionEnum;
};

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
