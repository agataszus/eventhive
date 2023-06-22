import { Text } from "../text/text";
import styles from "./dateTileSmall.module.scss";

type DateTileProps = {
  day: string;
  month: string;
};

export const DateTileSmall = ({ day, month }: DateTileProps) => {
  return (
    <div className={styles.tile}>
      <Text tag="span" variant="num-1">
        {day}
      </Text>
      <Text tag="span" variant="caption-4">
        {month}
      </Text>
    </div>
  );
};
