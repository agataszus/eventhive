import { useQuery } from "react-query";
import { getUserTickets } from "../services/api/tickets/getUserTickets";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { getUserTicketsKey } from "./queryKeys";

export const useUserTicketsQuery = () => {
  const { token } = useAuthToken();

  return useQuery(getUserTicketsKey(), () => getUserTickets(token));
};
