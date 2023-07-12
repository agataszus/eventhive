import { DateTileSmall } from "../dateTileSmall/DateTileSmall";
import { Text } from "../text/text";
import styles from "./eventTile.module.scss";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import alternativePic from "../../assets/no-picture.png";
import { SeeMoreOverlay } from "../seeMoreOverlay/SeeMoreOverlay";
import { parseEventDate } from "../../helpers/parseEventDate";
import { AllEventsEventDto } from "../../services/api/event/types";

type EventTileProps = {
  event: AllEventsEventDto;
  onClick: () => void;
};

export const EventTile = ({ event, onClick }: EventTileProps) => {
  const { day, month } = parseEventDate(event.startDate);
  const { title, description, externalImageUrls } = event;
  // const overlayRef = useRef<HTMLDivElement>(null);

  // const handleOnMouseEnter = () => {
  //   overlayRef.current?.classList.add(styles.overlayShow);
  // };

  // const handleOnMouseLeave = () => {
  //   overlayRef.current?.classList.remove(styles.overlayShow);
  // };

  return (
    <div
      onClick={onClick}
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
          src={externalImageUrls[0] || alternativePic}
          alt={title}
          className={styles.image}
        />
        <div className={styles.dateTile}>
          <DateTileSmall day={day} month={month} />
        </div>
      </div>
      <Text tag="h4" variant="action-2" className={styles.title}>
        {title}
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
