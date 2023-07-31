import { parseEventDate } from "../../helpers/parseEventDate";
import { DateTileSmall } from "../dateTileSmall/DateTileSmall";
import { Text } from "../text/text";
import alternativePic from "../../assets/no-picture.png";
import styles from "./userTicketCard.module.scss";
import { Link } from "react-router-dom";
import { getEventPath } from "../routes/paths";
import { ListTicketDto } from "../../services/api/tickets/types";
import { TicketQRCode } from "../ticketQRCode/TicketQRCode";
import { TicketModal } from "../ticketModal/TicketModal";
import { useState } from "react";

type UserTicketCardProps = {
  ticket: ListTicketDto;
};

export const UserTicketCard = ({ ticket }: UserTicketCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!ticket) return null;
  const {
    id,
    type: {
      title: ticketTitle,
      description,
      event: { title: eventTitle, startDate, externalImageUrls, id: eventId },
    },
  } = ticket;

  const { day, month } = parseEventDate(startDate);

  return (
    <>
      <TicketModal
        isOpen={isModalOpen}
        ticketId={id}
        setIsOpen={setIsModalOpen}
      />
      <div className={styles.ticketCard}>
        <div className={styles.imageContainer}>
          <img
            src={externalImageUrls[0] || alternativePic}
            className={styles.image}
          />
          <div className={styles.dateTile}>
            <DateTileSmall day={day} month={month} />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <Link to={getEventPath(eventId)}>
            <Text tag="h3" variant="heading-5" className={styles.eventTitle}>
              {eventTitle}
            </Text>
          </Link>
          <Text tag="h4" variant="subtitle-2" className={styles.ticketTitle}>
            {ticketTitle}
          </Text>
          <Text tag="p" variant="caption-2" className={styles.description}>
            {description}
          </Text>
        </div>
        <button className={styles.qrCode} onClick={() => setIsModalOpen(true)}>
          <TicketQRCode id={id} variant="small" />
        </button>
      </div>
    </>
  );
};
