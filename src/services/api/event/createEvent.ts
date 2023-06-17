import { CreateEventDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getEventsRoute } from "../routes";
import { IdEventDto } from "./types";

export const createEvent = async (token: string, eventData: CreateEventDto) => {
  const data = await apiClient<CreateEventDto, IdEventDto>({
    method: "POST",
    route: getEventsRoute(),
    token,
    payload: eventData,
  });

  return data;
};
