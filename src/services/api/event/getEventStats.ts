import { apiClient } from "../client";
import { getEventStatsRoute } from "../routes";
import { eventStatsDto } from "./types";

export const getEventStats = async (token: string, id: number) => {
  const data = await apiClient<undefined, eventStatsDto>({
    method: "GET",
    route: getEventStatsRoute(id),
    token,
  });

  return data;
};
