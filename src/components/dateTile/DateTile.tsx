import { Text } from "../text/text";
import styles from "./dateTile.module.scss";

export const DateTile = () => {
  return (
    <div className={styles.tile}>
      <Text tag="span" variant="num-1">
        23
      </Text>
      <Text tag="span" variant="caption-3">
        June
      </Text>
    </div>
  );
};
