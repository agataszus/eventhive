import { CreateTicketTypeDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getTicketTypeRoute } from "../routes";
import { CreateTicketTypeResponseDto } from "./types";

export const updateTicketType = async (
  token: string,
  eventId: number,
  id: number,
  ticketData: Partial<CreateTicketTypeDto>
) => {
  const data = await apiClient<
    Partial<CreateTicketTypeDto>,
    CreateTicketTypeResponseDto
  >({
    method: "PATCH",
    route: getTicketTypeRoute(eventId, id),
    token,
    payload: ticketData,
  });

  return data;
};
