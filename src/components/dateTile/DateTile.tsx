import { Text } from "../text/Text";
import styles from "./dateTile.module.scss";

type DateTileProps = {
  day: string;
  month: string;
};

export const DateTile = ({ day, month }: DateTileProps) => {
  return (
    <div className={styles.tile}>
      <Text tag="span" variant="num-1">
        {day}
      </Text>
      <Text tag="span" variant="caption-3">
        {month}
      </Text>
    </div>
  );
};
