import { CreateTicketTypeDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getTicketsTypesRoute } from "../routes";
import { CreateTicketTypeResponseDto } from "./types";

export const createTicketType = async (
  token: string,
  ticketData: CreateTicketTypeDto,
  eventId: number
) => {
  const data = await apiClient<
    CreateTicketTypeDto,
    CreateTicketTypeResponseDto
  >({
    method: "POST",
    route: getTicketsTypesRoute(eventId),
    token,
    payload: ticketData,
  });

  return data;
};
