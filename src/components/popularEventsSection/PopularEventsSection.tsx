import { Text } from "../text/text";
import styles from "./popularEventsSection.module.scss";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import festivals from "../../assets/categories/festivals.jpg";
import pop from "../../assets/categories/pop.jpg";
import electronic from "../../assets/categories/electronic.jpg";
import { EventTile } from "../eventTile/EventTile";

export const PopularEventsSection = () => {
  return (
    <div className={styles.popularEventsSection}>
      <div className={styles.titleLabel}>
        <Text tag="h3" variant="subtitle-2">
          Popular Now
        </Text>
        <div>
          <ArrowLeftSLineIcon className={styles.icon} />
          <ArrowRightSLineIcon className={styles.icon} />
        </div>
      </div>
      <div className={styles.events}>
        <EventTile
          name="Fest Festival"
          description="4 days, over 200 performances, and unforgettable emotions"
          picture={festivals}
        />
        <EventTile
          name="Tomorrowland"
          description="In 2023 you will witness the rise of a magnificent tale in the history of Tomorrowland's Great Library. Our destination lies high on the horizon."
          picture={electronic}
        />
        <EventTile
          name="Ultra Music Festival"
          description="The world's premier electronic music festival, boasting elite DJs and unparalleled production located in the beautiful city of Miami."
          picture={pop}
        />
        <EventTile
          name="Fest Festival"
          description="4 days, over 200 performances, and unforgettable emotions"
          picture={festivals}
        />
        <EventTile
          name="Tomorrowland"
          description="In 2023 you will witness the rise of a magnificent tale in the history of Tomorrowland's Great Library. Our destination lies high on the horizon."
          picture={electronic}
        />
        <EventTile
          name="Ultra Music Festival"
          description="The world's premier electronic music festival, boasting elite DJs and unparalleled production located in the beautiful city of Miami."
          picture={pop}
        />
      </div>
    </div>
  );
};
