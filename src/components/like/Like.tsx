import HeartLineIcon from "remixicon-react/HeartLineIcon";
import HeartFillIcon from "remixicon-react/HeartFillIcon";
import styles from "./like.module.scss";
import classNames from "classnames";
import { useToggleLikeEventMutation } from "../../queries/useToggleLikeEventMutation";
import { useEventLikedCheck } from "../../hooks/useEventLikedCheck";

type LikeProps = {
  id: number;
};

export const Like = ({ id }: LikeProps) => {
  const isLiked = useEventLikedCheck(id);

  const buttonClass = classNames(styles.button, { [styles.isLiked]: isLiked });

  const { mutate } = useToggleLikeEventMutation(isLiked, id);

  return (
    <button className={buttonClass} onClick={() => mutate()}>
      {isLiked ? (
        <HeartFillIcon className={styles.iconFill} />
      ) : (
        <HeartLineIcon className={styles.icon} />
      )}
    </button>
  );
};
