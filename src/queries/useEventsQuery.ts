import { useQuery } from "react-query";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { getEvents } from "../services/api/event/getEvents";
import { getEventsKey } from "./queryKeys";

export const useEventsQuery = () => {
  const { token } = useAuthToken();

  const query = useQuery(getEventsKey(), () => getEvents(token), {
    enabled: Boolean(token), // start query only after token is extracted from local storage
  });

  return query;
};
