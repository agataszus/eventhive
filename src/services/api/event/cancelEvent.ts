import { apiClient } from "../client";
import { getCancelEventRoute } from "../routes";
import { IdEventDto } from "./types";

export const cancelEvent = async (token: string, id: number) => {
  const data = await apiClient<undefined, IdEventDto>({
    method: "PATCH",
    route: getCancelEventRoute(id),
    token,
  });

  return data;
};
