import { apiClient } from "../client";
import { getEventRoute } from "../routes";

export const deleteEvent = async (token: string, id: number) => {
  const data = await apiClient<undefined, null>({
    method: "DELETE",
    route: getEventRoute(id),
    token,
  });

  return data;
};
