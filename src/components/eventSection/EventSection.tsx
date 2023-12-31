import styles from "./eventSection.module.scss";
import { Text } from "../text/Text";
import { EventProperty } from "../eventProperty/EventProperty";
import { parseEventDate } from "../../helpers/parseEventDate";
import { Button } from "../button/Button";
import { Like } from "../like/Like";
import { IdEventDto } from "../../services/api/event/types";
import { LazyLoadImage } from "react-lazy-load-image-component";

type EventSectionProps = {
  event: IdEventDto;
  onBuyTicketsClick: () => void;
};

export const EventSection = ({
  event,
  onBuyTicketsClick,
}: EventSectionProps) => {
  const {
    title,
    startDate,
    endDate,
    externalImageUrls,
    description,
    locationName,
    category,
    id,
    // isCanceled,
    createdBy: { name },
  } = event;

  const {
    day: startDay,
    month: startMonth,
    year: startYear,
  } = parseEventDate(startDate);
  const firstDay = `${startDay} ${startMonth} ${startYear}`;

  const {
    day: endDay,
    month: endMonth,
    year: endYear,
  } = parseEventDate(endDate);
  const lastDay = `${endDay} ${endMonth} ${endYear}`;

  return (
    <div className={styles.eventCard}>
      <div className={styles.imageContainer}>
        <LazyLoadImage
          src={externalImageUrls[0]}
          alt="Event image"
          className={styles.image}
          // Added key to force image reload on event change - probably a bug in LazyLoadImage
          key={`${id}-image`}
        />
      </div>
      <div className={styles.informationContainer}>
        <Text tag="h3" variant="heading-3">
          {title}
        </Text>
        <ul className={styles.description}>
          <EventProperty category="Date">
            {firstDay} {endDate && `- ${lastDay}`}
          </EventProperty>
          <EventProperty category="Location">
            {locationName || "----------"}
          </EventProperty>
          <EventProperty category="Organizer">
            {name || "----------"}
          </EventProperty>
          <EventProperty category="Category">{category}</EventProperty>
        </ul>
        <div className={styles.about}>
          <Text tag="h4" variant="subtitle-2">
            About
          </Text>
          <Text tag="p" variant="caption-2" className={styles.descriptionText}>
            {description}
          </Text>
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonBuy}>
            <Button
              variant="narrow"
              text="Buy ticket!"
              onClick={onBuyTicketsClick}
            />
          </div>
          <Like id={id} />
        </div>
      </div>
    </div>
  );
};
