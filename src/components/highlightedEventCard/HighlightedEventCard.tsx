import { useMemo } from "react";
import { useEventsQuery } from "../../queries/useEventsQuery";
import { Button } from "../button/Button";
import { DateTile } from "../dateTile/DateTile";
import { Like } from "../like/Like";
import { Text } from "../text/text";
import styles from "./highlightedEventCard.module.scss";

export const HighlightedEventCard = () => {
  const { data: events } = useEventsQuery();

  const randomNumber = useMemo(() => {
    const randomNum = Math.random();
    return randomNum;
  }, []);

  if (!events) return null;
  const highlightedEvent = events[Math.floor(randomNumber * events.length)];

  const date = new Date(highlightedEvent.startDate);
  const day = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
  }).format(date);
  const month = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(date);

  return (
    <div
      className={styles.card}
      style={
        highlightedEvent.externalImageUrls.length
          ? {
              backgroundImage: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.65) 30%,
      rgba(255, 255, 255, 0) 70%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${highlightedEvent.externalImageUrls[0]})`,
            }
          : undefined
      }
    >
      <div className={styles.description}>
        <div className={styles.title}>
          <Text tag="h3" variant="heading-1" extraClass={styles.titleText}>
            {highlightedEvent.title}
          </Text>
          <Text
            tag="h4"
            variant="subtitle-1"
            extraClass={styles.descriptionText}
          >
            {highlightedEvent.description}
          </Text>
        </div>
        <Text tag="p" variant="action-4">
          Read more
        </Text>
        <div className={styles.buttonsContainer}>
          <div className={styles.button}>
            <Button text="Buy Ticket" />
          </div>
          <Like />
        </div>
      </div>
      <div className={styles.dateContainer}>
        <DateTile day={day} month={month} />
      </div>
    </div>
  );
};
