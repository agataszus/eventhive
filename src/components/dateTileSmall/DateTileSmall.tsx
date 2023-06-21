import { Text } from "../text/text";
import styles from "./dateTileSmall.module.scss";

export const DateTileSmall = () => {
  return (
    <div className={styles.tile}>
      <Text tag="span" variant="num-1">
        23
      </Text>
      <Text tag="span" variant="caption-4">
        Nov
      </Text>
    </div>
  );
};
