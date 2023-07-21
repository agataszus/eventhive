import { apiClient } from "../client";
import { getEventRoute } from "../routes";
import { GetEventOptions, IdEventDto } from "./types";

export const getEvent = async ({ token, id }: GetEventOptions) => {
  const data = await apiClient<undefined, IdEventDto>({
    method: "GET",
    route: getEventRoute(id),
    token,
  });

  return data;
};
