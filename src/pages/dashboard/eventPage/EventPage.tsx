import { useParams } from "react-router-dom";
import { EventTopBar } from "../../../components/eventTopBar/EventTopBar";
import styles from "./eventPage.module.scss";
import { useEventQuery } from "../../../queries/useEventQuery";
import { EventSection } from "../../../components/eventSection/EventSection";
import { Loader } from "../../../components/loader/Loader";
import { EventTicketsSection } from "../../../components/eventTicketsSection/EventTicketsSection";
import { PopularEventsSection } from "../../../components/popularEventsSection/PopularEventsSection";
import { useEffect, useRef, useState } from "react";
import { Error } from "../../../components/error/Error";
import { useTopbarVisibleCheck } from "../../../hooks/useTopbarVisibleCheck";

const getGradientOnImage = (
  url: string
) => `linear-gradient(to right, #191919ef, #191919ef),
  url(${url})`;

export const EventPage = () => {
  const { id } = useParams();
  const { data: event, isLoading } = useEventQuery(Number(id));
  const ticketsSectionRef = useRef<HTMLDivElement>(null);

  const isTopbar = useTopbarVisibleCheck();
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    setIsTopbarVisible(isTopbar);
  }, [isTopbar]);

  const handleBuyTicketsClick = () => {
    ticketsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className={styles.eventPage}>
        <Loader variant="large" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className={styles.eventPage}>
        {isTopbarVisible && <EventTopBar />}
        <div className={styles.content}>
          <Error message="Something went wrong. Try again later!" />
        </div>
      </div>
    );
  }

  const { externalImageUrls } = event || {};

  return (
    <div
      className={styles.eventPage}
      style={
        externalImageUrls?.length
          ? { backgroundImage: getGradientOnImage(externalImageUrls[0]) }
          : undefined
      }
    >
      {isTopbarVisible && <EventTopBar />}
      <div className={styles.content}>
        <EventSection event={event} onBuyTicketsClick={handleBuyTicketsClick} />
      </div>
      <div ref={ticketsSectionRef}>
        <EventTicketsSection event={event} />
      </div>
      <PopularEventsSection />
    </div>
  );
};
