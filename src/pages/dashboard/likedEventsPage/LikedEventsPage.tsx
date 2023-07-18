import { Error } from "../../../components/error/Error";
import { LikedEventCard } from "../../../components/likedEventCard/LikedEventCard";
import { Loader } from "../../../components/loader/Loader";
import { TopBar } from "../../../components/topBar/TopBar";
import { useEventsQuery } from "../../../queries/useEventsQuery";
import styles from "./likedEventsPage.module.scss";

export const LikedEventsPage = () => {
  const { data: events, isLoading, isError } = useEventsQuery();

  if (!events && isError)
    return (
      <div className={styles.page}>
        <TopBar title="Liked events" />
        <div className={styles.likedEventsSection}>
          <Error message="Couldn't get events. Try again later!" />
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className={styles.page}>
        <TopBar title="Liked events" />
        <div className={styles.likedEventsSection}>
          <Loader variant="large" />
        </div>
      </div>
    );

  const likedEvents = events?.filter((event) => event.isLiked);

  return (
    <div className={styles.page}>
      <TopBar title="Liked events" />
      <div className={styles.likedEventsSection}>
        {likedEvents?.length ? (
          likedEvents.map((event) => (
            <LikedEventCard event={event} key={event.id} />
          ))
        ) : (
          <Error message="You don't like any events yet" />
        )}
      </div>
    </div>
  );
};
