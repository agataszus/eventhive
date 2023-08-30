import { useQuery } from "./useQuery";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { getEvents } from "../services/api/event/getEvents";
import { getEventsKey } from "./queryKeys";
import { useMemo } from "react";
import { AllEventsDto } from "../services/api/event/types";
import { RequestError } from "../services/api/client";

export const useEventsQuery = () => {
  const { token } = useAuthToken();

  const { data, ...restQuery } = useQuery<
    AllEventsDto,
    RequestError,
    AllEventsDto,
    string
  >(getEventsKey(), () => getEvents("123"), {
    enabled: Boolean(token), // start query only after token is extracted from local storage
  });

  const events = useMemo(
    () =>
      data?.sort((eventA, eventB) => {
        const eventADate = new Date(eventA.startDate);
        const eventBDate = new Date(eventB.startDate);

        return eventADate.getTime() - eventBDate.getTime();
      }),
    [data]
  );

  return { data: events, ...restQuery };
};
