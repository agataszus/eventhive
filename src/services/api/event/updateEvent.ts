import { CreateEventDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getEventRoute } from "../routes";
import { UpdateEventDto } from "./types";

export const updateEvent = async (
  token: string,
  eventData: Partial<CreateEventDto>,
  id: number
) => {
  const data = await apiClient<Partial<CreateEventDto>, UpdateEventDto>({
    method: "PATCH",
    route: getEventRoute(id),
    token,
    payload: eventData,
  });

  return data;
};
