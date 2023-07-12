import styles from "./popularEventsSection.module.scss";
import { EventTile } from "../eventTile/EventTile";
import { useEventsQuery } from "../../queries/useEventsQuery";
import { Loader } from "../loader/Loader";
import { Error } from "../error/Error";
import { useNavigate } from "react-router-dom";
import { Carousel } from "../carousel/Carousel";

export const PopularEventsSection = () => {
  const { data: events, isLoading, isError } = useEventsQuery();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/dashboard/event/${id}`);
  };

  return (
    <Carousel title="Popular events section">
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
    </Carousel>
  );
};
