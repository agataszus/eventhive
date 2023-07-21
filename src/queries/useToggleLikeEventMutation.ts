import { useLikeEventMutation } from "./useLikeEventMutation";
import { useUnlikeEventMutation } from "./useUnlikeEventMutation";

export const useToggleLikeEventMutation = (isLiked: boolean, id: number) => {
  const likeMutation = useLikeEventMutation(id);
  const unlikeMutation = useUnlikeEventMutation(id);

  return isLiked ? unlikeMutation : likeMutation;
};
