import { apiClient } from "../client";
import { getProfileRoute } from "../routes";
import { CreateOrganizationProfileDto, OrganizationAccountDto } from "./types";

export const createOrganizationProfile = async (
  userData: CreateOrganizationProfileDto,
  token: string
) => {
  const data = await apiClient<
    CreateOrganizationProfileDto,
    OrganizationAccountDto
  >({
    method: "POST",
    route: getProfileRoute(),
    payload: userData,
    token,
  });

  return data;
};
