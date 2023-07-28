import { parseEventDate } from "../../helpers/parseEventDate";
import { DateTileSmall } from "../dateTileSmall/DateTileSmall";
import { Text } from "../text/text";
import alternativePic from "../../assets/no-picture.png";
import styles from "./userTicketCard.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { getEventPath } from "../routes/paths";
import { ListTicketDto } from "../../services/api/tickets/types";
import { TicketQRCode } from "../ticketQRCode/TicketQRCode";

type UserTicketCardProps = {
  ticket: ListTicketDto;
};

export const UserTicketCard = ({ ticket }: UserTicketCardProps) => {
  const navigate = useNavigate();

  if (!ticket) return null;
  const {
    id,
    type: {
      title: ticketTitle,
      description,
      event: { title: eventTitle, startDate, externalImageUrls },
    },
  } = ticket;

  const { day, month } = parseEventDate(startDate);

  return (
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
        <Link to={getEventPath(id)}>
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
      <div className={styles.qrCode}>
        <TicketQRCode id={id} />
      </div>
    </div>
  );
};
