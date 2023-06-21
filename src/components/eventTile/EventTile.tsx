import { DateTileSmall } from "../dateTileSmall/DateTileSmall";
import { Text } from "../text/text";
import styles from "./eventTile.module.scss";
import HeartLineIcon from "remixicon-react/HeartLineIcon";

type EventTileProps = {
  name: string;
  picture: string;
  description: string;
};

export const EventTile = ({ name, description, picture }: EventTileProps) => {
  return (
    <div className={styles.eventTile}>
      <div className={styles.imageBox}>
        <img src={picture} alt={name} className={styles.image} />
        <div className={styles.dateTile}>
          <DateTileSmall />
        </div>
      </div>
      <Text tag="h4" variant="action-2">
        {name}
      </Text>
      <Text tag="p" variant="caption-2" extraClass={styles.description}>
        {description}
      </Text>
      <div className={styles.likesBox}>
        <HeartLineIcon className={styles.icon} />
        <Text tag="p" variant="subtitle-4">
          1,758 likes
        </Text>
      </div>
    </div>
  );
};
