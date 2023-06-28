import { useQuery } from "react-query";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { getEvents } from "../services/api/event/getEvents";

export const useEventsQuery = () => {
  const { token } = useAuthToken();

  const query = useQuery("events", () => getEvents(token), {
    enabled: Boolean(token),
  });

  return query;
};
