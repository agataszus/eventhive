import { apiClient } from "../client";
import { getOrganizationEventsRoute } from "../routes";
import { AllEventsDto } from "./types";

export const getOrganizationEvents = async (token: string) => {
  const data = await apiClient<undefined, AllEventsDto>({
    method: "GET",
    route: getOrganizationEventsRoute(),
    token,
  });

  return data;
};
