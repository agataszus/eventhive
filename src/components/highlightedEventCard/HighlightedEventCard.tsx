import { useMemo } from "react";
import { useEventsQuery } from "../../queries/useEventsQuery";
import { Button } from "../button/Button";
import { DateTile } from "../dateTile/DateTile";
import { Like } from "../like/Like";
import { Text } from "../text/text";
import styles from "./highlightedEventCard.module.scss";
import { Loader } from "../loader/Loader";
import { Error } from "../error/Error";
import { parseEventDate } from "../../helpers/parseEventDate";
import { Link } from "react-router-dom";

const getDarkenBackgroundImage = (url: string) => `linear-gradient(
  to right,
  rgba(0, 0, 0, 0.8),
  rgba(0, 0, 0, 0.65) 30%,
  rgba(255, 255, 255, 0) 70%,
  rgba(0, 0, 0, 0.5) 100%
),
url(${url})`;

export const HighlightedEventCard = () => {
  const { data: events, isLoading, isError } = useEventsQuery();

  const randomNumber = useMemo(() => {
    const randomNum = Math.random();
    return randomNum;
  }, []);

  if (isLoading)
    return (
      <div className={styles.cardLoading}>
        <Loader variant="large" />
      </div>
    );

  if (isError)
    return (
      <div className={styles.cardLoading}>
        <Error message="Could not load the event. Try again!"></Error>
      </div>
    );

  if (!events) return null;
  const { title, description, startDate, externalImageUrls, id } =
    events[Math.floor(randomNumber * events.length)];

  const { day, month } = parseEventDate(startDate);

  return (
    <div
      className={styles.card}
      style={
        externalImageUrls.length
          ? {
              backgroundImage: getDarkenBackgroundImage(externalImageUrls[0]),
            }
          : undefined
      }
    >
      <div className={styles.description}>
        <div className={styles.title}>
          <Text tag="h3" variant="heading-2" className={styles.titleText}>
            {title}
          </Text>
          <Text
            tag="h4"
            variant="subtitle-1"
            className={styles.descriptionText}
          >
            {description}
          </Text>
        </div>
        <Link to={`/dashboard/event/${id}`}>
          <Text tag="p" variant="action-4">
            Read more
          </Text>
        </Link>
        <div className={styles.buttonsContainer}>
          <div className={styles.button}>
            <Button text="Buy Ticket" variant="narrow" />
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
