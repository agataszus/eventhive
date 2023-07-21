import { useQuery } from "react-query";
import { getEvent } from "../services/api/event/getEvent";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";

export const useEventQuery = (id: number, options?: { enabled: boolean }) => {
  const { token } = useAuthToken();

  return useQuery(["events", id], () => getEvent({ id, token }), options);
};
