import { useParams } from "react-router-dom";
import { useEventQuery } from "../../queries/useEventQuery";
import styles from "./eventCard.module.scss";
import { Text } from "../text/text";
import { EventDescriptionElement } from "../eventDescriptionElement/EventDescriptionElement";
import { parseEventDate } from "../../helpers/parseEventDate";
import { Button } from "../button/Button";
import { Like } from "../like/Like";

export const EventCard = () => {
  const { id } = useParams();
  const { data: event } = useEventQuery(Number(id));

  if (!event) return null;
  const {
    title,
    startDate,
    endDate,
    externalImageUrls,
    description,
    locationName,
    category,
    isCanceled,
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
        <img
          src={externalImageUrls[0]}
          alt="Event image"
          className={styles.image}
        />
      </div>
      <div className={styles.informationContainer}>
        <Text tag="h3" variant="heading-4">
          {title}
        </Text>
        <ul className={styles.description}>
          <EventDescriptionElement category="Date">
            {firstDay} {endDate && `- ${lastDay}`}
          </EventDescriptionElement>
          <EventDescriptionElement category="Location">
            {locationName || "----------"}
          </EventDescriptionElement>
          <EventDescriptionElement category="Organizer">
            {name || "----------"}
          </EventDescriptionElement>
          <EventDescriptionElement category="Category">
            {category}
          </EventDescriptionElement>
        </ul>
        <div className={styles.about}>
          <Text tag="h4" variant="subtitle-2">
            About
          </Text>
          <Text tag="p" variant="caption-3">
            {description}
          </Text>
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonBuy}>
            <Button variant="narrow" text="Buy ticket!" />
          </div>
          <Like />
        </div>
      </div>
    </div>
  );
};
