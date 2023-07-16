import { useQuery } from "react-query";
import { getEvents } from "../../services/api/event/getEvents";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { getEventsKey } from "../../queries/queryKeys";

export const EventsList = () => {
  const { token } = useAuthToken();

  const { data, isLoading, isError, isSuccess } = useQuery(getEventsKey(), () =>
    getEvents(token)
  );

  console.log(data);

  return (
    <div>
      {isLoading && "Loading..."}
      {isError && "Error"}
      {isSuccess && "Success"}
    </div>
  );
};
