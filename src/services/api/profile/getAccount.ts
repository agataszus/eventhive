import { apiClient } from "../client";
import { getAccountRoute } from "../routes";
import { ActionsReturnUserProfileDto, OrganizationAccountDto } from "./types";

export const getAccount = async (token: string) => {
  const data = await apiClient<
    undefined,
    ActionsReturnUserProfileDto | OrganizationAccountDto
  >({
    method: "GET",
    route: getAccountRoute(),
    token,
  });

  return data;
};
