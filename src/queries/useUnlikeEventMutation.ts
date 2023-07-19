import { useMutation, useQueryClient } from "react-query";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { unlikeEvent } from "../services/api/event/unlikeEvent";
import { useCallback } from "react";
import { AllEventsDto, IdEventDto } from "../services/api/event/types";
import { useAccountQuery } from "./useAccountQuery";

export const useUnlikeEventMutation = (id: number) => {
  const { token } = useAuthToken();
  const { data: user } = useAccountQuery();
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation(() => unlikeEvent(token, id));

  const handleMutate = useCallback(
    async (options?: { onSuccess: () => void; onError: () => void }) => {
      // optimistic update on Event
      await queryClient.cancelQueries(["events", id]);

      const previousEvent = queryClient.getQueryData<IdEventDto>([
        "events",
        id,
      ]);

      if (previousEvent && user) {
        const temporaryEventLikes = previousEvent.likes?.filter(
          (like) => like.user.id !== user.profile.id
        );

        queryClient.setQueryData(["events", id], () => {
          return { ...previousEvent, likes: temporaryEventLikes };
        });
      }

      //optimistic update on Events
      await queryClient.cancelQueries(["events"]);

      const previousEvents = queryClient.getQueryData<AllEventsDto>(["events"]);
      if (previousEvents) {
        const temporaryEvents = previousEvents.map((event) => {
          if (event.id === id) return { ...event, isLiked: false };

          return event;
        });

        queryClient.setQueryData<AllEventsDto>(
          ["events"],
          () => temporaryEvents
        );
      }

      const { onSuccess, onError } = options || {};

      const handleSuccess = () => {
        queryClient.invalidateQueries(["events", id]);
        onSuccess?.();
      };

      mutate(undefined, { onSuccess: handleSuccess, onError });
    },
    [id, queryClient, user, mutate]
  );

  return { mutate: handleMutate, ...rest };
};