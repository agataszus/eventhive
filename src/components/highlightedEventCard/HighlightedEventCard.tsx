import { Button } from "../button/Button";
import { DateTile } from "../dateTile/DateTile";
import { Like } from "../like/Like";
import { Text } from "../text/text";
import styles from "./highlightedEventCard.module.scss";

export const HighlightedEventCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <div className={styles.title}>
          <Text tag="h3" variant="heading-1">
            Orange Warsaw Festival
          </Text>
          <Text tag="h4" variant="subtitle-1">
            Biggest music festival in Warsaw
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
        <DateTile />
      </div>
    </div>
  );
};
