import { parseEventDate } from "../../helpers/parseEventDate";
import { Button } from "../button/Button";
import { DateTileSmall } from "../dateTileSmall/DateTileSmall";
import { Text } from "../text/text";
import alternativePic from "../../assets/no-picture.png";
import styles from "./likedEventCard.module.scss";
import { Like } from "../like/Like";
import { Link, useNavigate } from "react-router-dom";
import { ListEventDto } from "../../services/api/event/types";
import { getEventPath } from "../routes/paths";
import { LazyLoadImage } from "react-lazy-load-image-component";

type LikedEventCardProps = {
  event: ListEventDto;
};

export const LikedEventCard = ({ event }: LikedEventCardProps) => {
  const navigate = useNavigate();

  if (!event) return null;
  const { description, title, externalImageUrls, startDate, id } = event;

  const { day, month } = parseEventDate(startDate);

  return (
    <div className={styles.eventCard}>
      <div className={styles.imageContainer}>
        <LazyLoadImage
          src={externalImageUrls[0] || alternativePic}
          className={styles.image}
        />
        <div className={styles.dateTile}>
          <DateTileSmall day={day} month={month} />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <Link to={getEventPath(id)}>
          <Text tag="h3" variant="heading-5" className={styles.title}>
            {title}
          </Text>
        </Link>
        <Text tag="p" variant="caption-2" className={styles.description}>
          {description}
        </Text>
        <div className={styles.buttonsContainer}>
          <Like id={id} />
          <div className={styles.buttonBuy}>
            <Button
              variant="narrow"
              text="Buy ticket!"
              onClick={() => navigate(getEventPath(id))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
