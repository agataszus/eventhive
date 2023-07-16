import { useAccountQuery } from "../queries/useAccountQuery";
import { useEventQuery } from "../queries/useEventQuery";

export const useEventLikedCheck = (id?: number) => {
  const { data: user } = useAccountQuery();
  const userId = user?.profile?.id;

  const { data: event } = useEventQuery(id ?? 0, {
    enabled: id !== undefined,
  });

  const eventLike = event?.likes?.find((like) => like.user.id === userId);

  return Boolean(eventLike);
};
