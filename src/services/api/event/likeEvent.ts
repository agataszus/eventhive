import { EventDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getLikeEventRoute } from "../routes";

export const likeEvent = async (token: string, id: number) => {
  const data = await apiClient<undefined, EventDto>({
    method: "POST",
    route: getLikeEventRoute(id),
    token,
  });

  return data;
};
