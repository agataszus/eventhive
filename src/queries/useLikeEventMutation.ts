import { EventLikeDto } from "./../services/api/api-types.gen";
import { useMutation, useQueryClient } from "react-query";
import { likeEvent } from "../services/api/event/likeEvent";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { useCallback } from "react";
import { IdEventDto } from "../services/api/event/types";
import { useAccountQuery } from "./useAccountQuery";

export const useLikeEventMutation = (id: number) => {
  const queryClient = useQueryClient();
  const { data: user } = useAccountQuery();
  const { token } = useAuthToken();

  const { mutate, ...restMutation } = useMutation(() => likeEvent(token, id));

  const handleMutate = useCallback(
    async (options?: { onSuccess: () => void; onError: () => void }) => {
      await queryClient.cancelQueries({ queryKey: ["events", id] });

      const previousEvent = queryClient.getQueryData<IdEventDto>([
        "events",
        id,
      ]);
      if (previousEvent && user) {
        const temporaryLike = {
          id: -1,
          user: user.profile,
        } as EventLikeDto;

        queryClient.setQueryData<IdEventDto>(["events", id], () => {
          return {
            ...previousEvent,
            likes: [...(previousEvent.likes ?? []), temporaryLike],
          };
        });
      }

      const { onSuccess, onError } = options ?? {};

      const handleSuccess = () => {
        queryClient.invalidateQueries(["events", id]);
        onSuccess?.();
      };

      mutate(undefined, { onSuccess: handleSuccess, onError });
    },
    [mutate, queryClient, id, user]
  );

  return { mutate: handleMutate, ...restMutation };
};
