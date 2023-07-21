import { useMutation, useQueryClient } from "react-query";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { unlikeEvent } from "../services/api/event/unlikeEvent";
import { useCallback } from "react";
import { AllEventsDto, IdEventDto } from "../services/api/event/types";
import { useAccountQuery } from "./useAccountQuery";
import { getEventKey, getEventsKey } from "./queryKeys";

export const useUnlikeEventMutation = (id: number) => {
  const { token } = useAuthToken();
  const { data: user } = useAccountQuery();
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation(() => unlikeEvent(token, id));

  const handleMutate = useCallback(
    async (options?: { onSuccess: () => void; onError: () => void }) => {
      // optimistic update on Event
      await queryClient.cancelQueries(getEventKey(id));

      const previousEvent = queryClient.getQueryData<IdEventDto>(
        getEventKey(id)
      );

      if (previousEvent && user) {
        const temporaryEventLikes = previousEvent.likes?.filter(
          (like) => like.user.id !== user.profile.id
        );

        queryClient.setQueryData(getEventKey(id), () => {
          return { ...previousEvent, likes: temporaryEventLikes };
        });
      }

      //optimistic update on Events
      await queryClient.cancelQueries(getEventsKey());

      const previousEvents = queryClient.getQueryData<AllEventsDto>(
        getEventsKey()
      );
      if (previousEvents) {
        const temporaryEvents = previousEvents.map((event) => {
          if (event.id === id) return { ...event, isLiked: false };

          return event;
        });

        queryClient.setQueryData<AllEventsDto>(
          getEventsKey(),
          () => temporaryEvents
        );
      }

      const { onSuccess, onError } = options || {};

      const handleSuccess = () => {
        queryClient.invalidateQueries(getEventsKey());
        onSuccess?.();
      };

      mutate(undefined, { onSuccess: handleSuccess, onError });
    },
    [id, queryClient, user, mutate]
  );

  return { mutate: handleMutate, ...rest };
};
