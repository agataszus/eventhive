import { apiClient } from "../client";
import { getEventsRoute } from "../routes";
import { AllEventsDto } from "./types";

export const getEvents = async (token: string) => {
  const data = await apiClient<undefined, AllEventsDto>({
    method: "GET",
    route: getEventsRoute(),
    token,
  });

  return data;
};
