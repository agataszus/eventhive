import { Text } from "../text/text";
import styles from "./popularEventsSection.module.scss";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import { EventTile } from "../eventTile/EventTile";
import { useEventsQuery } from "../../queries/useEventsQuery";
import { Loader } from "../loader/Loader";
import { Error } from "../error/Error";
import { useNavigate } from "react-router-dom";

export const PopularEventsSection = () => {
  const { data: events, isLoading, isError } = useEventsQuery();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    console.log("click");
    navigate(`/dashboard/event/${id}`);
  };

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
        {isLoading && <Loader variant="large" />}
        {isError && <Error message="Something went wrong" />}
        {events?.map((event) => {
          return (
            <EventTile
              event={event}
              key={event.id}
              onClick={() => handleClick(event.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
