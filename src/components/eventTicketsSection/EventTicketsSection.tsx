import { useEffect, useState } from "react";
import { IdEventDto } from "../../services/api/event/types";
import { Carousel } from "../carousel/Carousel";
import { TicketTile } from "../ticketTile/TicketTile";
import styles from "./eventTicketsSection.module.scss";
import { MOBILE, useMediaQueries } from "../../hooks/useMediaQueries";

const DEFAULT_TICKETS = [
  {
    description:
      "Elevate your event experience with the exclusive VIP Experience Pass. Enjoy special perks like priority entry, access to VIP lounges, complimentary drinks, and premium viewing areas. Immerse yourself in luxury and indulge in the ultimate festival adventure.",
    price: 25000,
    title: "VIP Experience Pass",
    id: 2345678908975,
  },
  {
    description:
      "Upgrade to the Premium Access Pass and enjoy an exclusive event experience. Gain access to premium amenities, dedicated lounges, artist meet and greets, and much more. Immerse yourself in luxury and make your festival experience truly unforgettable.",
    price: 55000,
    title: "Premium Access Pass",
    id: 987654325678,
  },
  {
    description:
      "Get ready to join the energetic crowd with the Normal Pass. This ticket grants you access to the standing area, where you can freely move, dance, and immerse yourself in the vibrant atmosphere. Secure your spot among fellow music enthusiasts for an unforgettable night.",
    price: 10000,
    title: "Normal Pass",
    id: 8765643678908765,
  },
];

type EventTicketsSectionProps = {
  event: IdEventDto;
};

export const EventTicketsSection = ({ event }: EventTicketsSectionProps) => {
  const [isSoldOut, setIsSoldOut] = useState(false);
  const { ticketTypes } = event;
  const mediaQuery = useMediaQueries();

  useEffect(() => {
    setIsSoldOut(!ticketTypes?.length);
  }, [isSoldOut, ticketTypes?.length]);

  return (
    <div className={styles.ticketsSection}>
      <Carousel
        title="Tickets"
        elementWidth={mediaQuery === MOBILE ? 240 : 540}
        gap={32}
      >
        <div className={styles.tickets}>
          {(ticketTypes?.length ? ticketTypes : DEFAULT_TICKETS).map(
            (ticket) => (
              <div key={ticket.id}>
                <TicketTile
                  event={event}
                  ticket={ticket}
                  isSoldOut={isSoldOut}
                />
              </div>
            )
          )}
        </div>
      </Carousel>
    </div>
  );
};
