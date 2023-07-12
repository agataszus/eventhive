import { Text } from "../text/text";
import ArrowLeftFillIcon from "remixicon-react/ArrowLeftFillIcon";
import styles from "./eventTopBar.module.scss";

export const EventTopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.title}>
        <ArrowLeftFillIcon className={styles.icon} />
        <Text tag="h2" variant="subtitle-2">
          Events
        </Text>
      </div>
    </div>
  );
};
