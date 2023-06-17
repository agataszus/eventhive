import { apiClient } from "../client";
import { getProfileRoute } from "../routes";
import { CreateOrganizationProfileDto } from "./types";

export const updateUserProfile = async (
  userData: Partial<CreateOrganizationProfileDto>,
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
