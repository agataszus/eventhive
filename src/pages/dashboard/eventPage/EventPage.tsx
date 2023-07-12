import { useParams } from "react-router-dom";
import { EventTopBar } from "../../../components/eventTopBar/EventTopBar";
import styles from "./eventPage.module.scss";
import { useEventQuery } from "../../../queries/useEventQuery";
import { EventCard } from "../../../components/eventCard/EventCard";

export const EventPage = () => {
  const { id } = useParams();
  const { data: event } = useEventQuery(Number(id));

  if (!event) return null;
  const { externalImageUrls } = event;

  const getGradientOnImage = (
    url: string
  ) => `linear-gradient(to right, #191919ef, #191919ef),
    url(${url})`;

  return (
    <div
      className={styles.eventPage}
      style={
        externalImageUrls.length
          ? { backgroundImage: getGradientOnImage(externalImageUrls[0]) }
          : undefined
      }
    >
      <EventTopBar />
      <div className={styles.content}>
        <EventCard />
      </div>
    </div>
  );
};
