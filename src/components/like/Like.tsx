import HeartLineIcon from "remixicon-react/HeartLineIcon";
import styles from "./like.module.scss";

export const Like = () => {
  return (
    <button className={styles.button}>
      <HeartLineIcon className={styles.icon} />
    </button>
  );
};
