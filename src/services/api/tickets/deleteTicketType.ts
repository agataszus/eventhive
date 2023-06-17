import { apiClient } from "../client";
import { getTicketTypeRoute } from "../routes";

export const deleteTicketType = async (
  token: string,
  eventId: number,
  id: number
) => {
  const data = await apiClient<undefined, undefined>({
    method: "DELETE",
    route: getTicketTypeRoute(eventId, id),
    token,
  });

  return data;
};
