import { apiClient } from "../client";
import { getTicketsTypesRoute } from "../routes";
import { GetTicketsTypesDto } from "./types";

export const getTicketTypesForEvent = async (
  token: string,
  eventId: number
) => {
  const data = await apiClient<undefined, GetTicketsTypesDto>({
    method: "GET",
    route: getTicketsTypesRoute(eventId),
    token,
  });

  return data;
};
