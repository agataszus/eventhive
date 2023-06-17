import { apiClient } from "../client";
import { getUserTicketsRoute } from "../routes";
import { UserTicketsDto } from "./types";

export const getUserTickets = async (token: string) => {
  const data = await apiClient<undefined, UserTicketsDto>({
    method: "GET",
    route: getUserTicketsRoute(),
    token,
  });

  return data;
};
