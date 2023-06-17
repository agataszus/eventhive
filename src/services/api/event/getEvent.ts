import { apiClient } from "../client";
import { getEventRoute } from "../routes";
import { IdEventDto } from "./types";

export const getEvent = async (token: string, id: number) => {
  const data = await apiClient<undefined, IdEventDto>({
    method: "GET",
    route: getEventRoute(id),
    token,
  });

  return data;
};
