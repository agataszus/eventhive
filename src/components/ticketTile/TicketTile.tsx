import { GetTicketsTypesDto } from "../../services/api/tickets/types";
import { Button } from "../button/Button";
import { Text } from "../text/text";
import styles from "./ticketTile.module.scss";
import { TicketSoldOut } from "../ticketSoldOut/TicketSoldOut";

type DefaultTicket = {
  title: string;
  description: string;
  id: number;
  price: number;
};

type TicketTileProps = {
  ticket: GetTicketsTypesDto | DefaultTicket;
  isSoldOut: boolean;
};

export const TicketTile = ({ ticket, isSoldOut }: TicketTileProps) => {
  const { title, description, price } = ticket;
  const parsePrice = (price: number) => "$" + (price / 100).toFixed(2);
  const ticketPrice = parsePrice(price);

  return (
    <div className={styles.ticketTile}>
      <div className={styles.ticketDescription}>
        <Text tag="h4" variant="heading-6" className={styles.dark}>
          {title}
        </Text>
        <Text tag="p" variant="caption-2" className={styles.description}>
          {description}
        </Text>
      </div>
      <div className={styles.priceContainer}>
        <Text tag="p" variant="heading-4" className={styles.dark}>
          {ticketPrice}
        </Text>
        <div className={styles.button}>
          <Button variant="narrow" text="Buy!" />
        </div>
      </div>
      {isSoldOut && <TicketSoldOut />}
    </div>
  );
};
