import { OrganizationProfileDto, ProfileDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getProfileRoute } from "../routes";

export const getProfile = async (token: string) => {
  const data = await apiClient<undefined, ProfileDto | OrganizationProfileDto>({
    method: "GET",
    route: getProfileRoute(),
    token,
  });

  return data;
};
