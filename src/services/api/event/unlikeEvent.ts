import { EventDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getUnlikeEventRoute } from "../routes";

export const unlikeEvent = async (token: string, id: number) => {
  const data = await apiClient<undefined, EventDto>({
    method: "POST",
    route: getUnlikeEventRoute(id),
    token,
  });

  return data;
};
