import { useQuery } from "react-query";
import { getTicketKey } from "./queryKeys";
import { getTicket } from "../services/api/tickets/getTicket";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";

export const useTicketQuery = (id: number) => {
  const { token } = useAuthToken();

  return useQuery(getTicketKey(id), () => getTicket(token, id));
};
