import avatar from "../../assets/pexels-sasha-kim-8420889.jpg";
import { Text } from "../text/text";
import styles from "./profileAvatar.module.scss";

export const ProfileAvatar = () => {
  return (
    <div className={styles.profileAvatar}>
      <div className={styles.imageContainer}>
        <img src={avatar} alt="Profile picture" className={styles.image} />
      </div>
      <div className={styles.nameContainer}>
        <Text tag="p" variant="caption-1">
          Sasha
        </Text>
        <Text tag="p" variant="caption-2">
          Kim
        </Text>
      </div>
    </div>
  );
};
