import { useQuery } from "./useQuery";
import { getEvent } from "../services/api/event/getEvent";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { getEventKey } from "./queryKeys";

export const useEventQuery = (id: number, options?: { enabled: boolean }) => {
  const { token } = useAuthToken();

  return useQuery(getEventKey(id), () => getEvent({ id, token }), options);
};
