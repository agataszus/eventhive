import { useQuery } from "react-query";
import { getEvent } from "../services/api/event/getEvent";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";

export const useEventQuery = (id: number) => {
  const { token } = useAuthToken();

  return useQuery(["event", id], () => getEvent({ id, token }));
};
