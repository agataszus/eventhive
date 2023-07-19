import { Link, useNavigate } from "react-router-dom";
import { parseEventDate } from "../../helpers/parseEventDate";
import { AllEventsEventDto } from "../../services/api/event/types";
import { DateTileSmall } from "../dateTileSmall/DateTileSmall";
import { Text } from "../text/text";
import { Like } from "../like/Like";
import { Button } from "../button/Button";
import { getEventPath } from "../routes/paths";
import styles from "./categoryEventCard.module.scss";

const getDarkenBackgroundImage = (url: string) => `linear-gradient(
  45deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.65) 10%,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0)
),
url(${url})`;

type CategoryEventCardProps = {
  event: AllEventsEventDto;
};

export const CategoryEventCard = ({ event }: CategoryEventCardProps) => {
  const navigate = useNavigate();
  const { title, description, externalImageUrls, startDate, id } = event;
  const { day, month } = parseEventDate(startDate);

  return (
    <div
      className={styles.eventCard}
      style={
        externalImageUrls.length
          ? {
              backgroundImage: getDarkenBackgroundImage(externalImageUrls[0]),
            }
          : undefined
      }
    >
      <div className={styles.dateTile}>
        <DateTileSmall day={day} month={month} />
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
