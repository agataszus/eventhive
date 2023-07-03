import { DateTileSmall } from "../dateTileSmall/DateTileSmall";
import { Text } from "../text/text";
import styles from "./eventTile.module.scss";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import alternativePic from "../../assets/no-picture.png";
import { SeeMoreOverlay } from "../seeMoreOverlay/SeeMoreOverlay";

type EventTileProps = {
  name: string;
  picture: string;
  description: string;
  day: string;
  month: string;
};

export const EventTile = ({
  name,
  description,
  picture,
  day,
  month,
}: EventTileProps) => {
  // const overlayRef = useRef<HTMLDivElement>(null);

  // const handleOnMouseEnter = () => {
  //   overlayRef.current?.classList.add(styles.overlayShow);
  // };

  // const handleOnMouseLeave = () => {
  //   overlayRef.current?.classList.remove(styles.overlayShow);
  // };

  return (
    <div
      className={styles.eventTile}
      // onMouseEnter={handleOnMouseEnter}
      // onMouseLeave={handleOnMouseLeave}
    >
      <div className={styles.imageBox}>
        <SeeMoreOverlay
          overlayClassName={styles.overlay}
          iconClassName={styles.overlayIcon}
        />
        <img
          src={picture || alternativePic}
          alt={name}
          className={styles.image}
        />
        <div className={styles.dateTile}>
          <DateTileSmall day={day} month={month} />
        </div>
      </div>
      <Text tag="h4" variant="action-2" className={styles.title}>
        {name}
      </Text>
      <Text tag="p" variant="caption-2" className={styles.description}>
        {description}
      </Text>
      <div className={styles.likesBox}>
        <HeartLineIcon className={styles.icon} />
        <Text tag="p" variant="subtitle-4">
          {Math.round(1500 + Math.random() * 500)} likes
        </Text>
      </div>
    </div>
  );
};
