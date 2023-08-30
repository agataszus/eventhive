import { DateTileSmall } from "../dateTileSmall/DateTileSmall";
import { Text } from "../text/Text";
import styles from "./eventTile.module.scss";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import alternativePic from "../../assets/no-picture.png";
import { SeeMoreOverlay } from "../seeMoreOverlay/SeeMoreOverlay";
import { parseEventDate } from "../../helpers/parseEventDate";
import { ListEventDto } from "../../services/api/event/types";
import { LazyLoadImage } from "react-lazy-load-image-component";

type EventTileProps = {
  event: ListEventDto;
  onClick: () => void;
};

export const EventTile = ({ event, onClick }: EventTileProps) => {
  const { day, month } = parseEventDate(event.startDate);
  const { title, description, externalImageUrls } = event;
  return (
    <button onClick={onClick} className={styles.eventTile}>
      <div className={styles.imageBox}>
        <SeeMoreOverlay
          overlayClassName={styles.overlay}
          iconClassName={styles.overlayIcon}
        />
        <LazyLoadImage
          src={externalImageUrls[0] || alternativePic}
          alt={title}
          className={styles.image}
        />
        <div className={styles.dateTile}>
          <DateTileSmall day={day} month={month} />
        </div>
      </div>
      <Text tag="h4" variant="action-1" className={styles.title}>
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
    </button>
  );
};
