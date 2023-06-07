import { ProfileDto, UserDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getProfileRoute } from "../routes";

export type CreateUserProfileDto = {
  firstName: string;
  lastName: string;
  region: ProfileDto.RegionEnum;
};
export type ActionsReturnUserProfileDto = Omit<
  UserDto,
  | "password"
  | "organizationProfile"
  | "profile.eventLikes"
  | "profile.tickets"
  | "profile.payments"
> & { organizationProfile: boolean | null };

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
