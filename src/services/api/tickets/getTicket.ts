import { apiClient } from "../client";
import { getTicketRoute } from "../routes";
import { GetTicketDto } from "./types";

export const getTicket = async (token: string, id: number) => {
  const data = await apiClient<undefined, GetTicketDto>({
    method: "GET",
    route: getTicketRoute(id),
    token,
  });

  return data;
};
