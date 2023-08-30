import { useEffect, useState } from "react";
import { Error } from "../../../components/error/Error";
import { LikedEventCard } from "../../../components/likedEventCard/LikedEventCard";
import { Loader } from "../../../components/loader/Loader";
import { TopBar } from "../../../components/topBar/TopBar";
import { useTopbarVisibleCheck } from "../../../hooks/useTopbarVisibleCheck";
import { useEventsQuery } from "../../../queries/useEventsQuery";
import styles from "./likedEventsPage.module.scss";

export const LikedEventsPage = () => {
  const { data: events, isLoading, isError } = useEventsQuery();

  const isTopbar = useTopbarVisibleCheck();
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    setIsTopbarVisible(isTopbar);
  }, [isTopbar]);

  const likedEvents = events?.filter((event) => event.isLiked);

  return (
    <div className={styles.page}>
      {isTopbarVisible && <TopBar title="Liked events" />}
      <div className={styles.likedEventsSection}>
        {!events && isError && (
          <Error message="Couldn't get events. Try again later!" />
        )}
        {isLoading && <Loader variant="large" />}

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
