import { DateTileSmall } from "../dateTileSmall/DateTileSmall";
import { Text } from "../text/text";
import styles from "./eventTile.module.scss";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import alternativePic from "../../assets/no-picture.png";

type EventTileProps = {
  name: string;
  picture: string;
  description: string;
  day: string;
  month: string;
  key?: string;
};

export const EventTile = ({ name, description, picture }: EventTileProps) => {
export const EventTile = ({
  name,
  description,
  picture,
  day,
  month,
}: EventTileProps) => {
  return (
    <div className={styles.eventTile}>
      <div className={styles.imageBox}>
        <img src={picture} alt={name} className={styles.image} />
        <img
          src={picture || alternativePic}
          alt={name}
          className={styles.image}
        />
        <div className={styles.dateTile}>
          <DateTileSmall />
          <DateTileSmall day={day} month={month} />
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
          {Math.round(1500 + Math.random() * 500)} likes
        </Text>
      </div>
    </div>
  );
};
