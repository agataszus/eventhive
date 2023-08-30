import { GetTicketsTypesDto } from "../../services/api/tickets/types";
import { Button } from "../button/Button";
import { Text } from "../text/text";
import styles from "./ticketTile.module.scss";
import { TicketSoldOut } from "../ticketSoldOut/TicketSoldOut";
import { parsePrice } from "../../helpers/parsePrice";
import SubtractLineIcon from "remixicon-react/SubtractLineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import { useState } from "react";
import { ShoppingCartItem } from "../../services/shoppingCartStore/types";
import { IdEventDto } from "../../services/api/event/types";
import { useShoppingCartStore } from "../../services/shoppingCartStore/useShoppingCartStore";
import { parseEventDate } from "../../helpers/parseEventDate";
import { setNewTicketCount } from "../../helpers/setNewTicketCount";
import classNames from "classnames";

type DefaultTicket = {
  title: string;
  description: string;
  id: number;
  price: number;
};

type TicketTileProps = {
  event: IdEventDto;
  ticket: GetTicketsTypesDto | DefaultTicket;
  isSoldOut: boolean;
};

export const TicketTile = ({ event, ticket, isSoldOut }: TicketTileProps) => {
  const { title, description, price, id } = ticket;
  const ticketPrice = parsePrice(price);
  const [count, setCount] = useState(1);
  const { addItem, openCart } = useShoppingCartStore();

  const decreaseButtonClassName = classNames(styles.stepperElement, {
    [styles.buttonDisable]: count <= 1,
  });

  const increaseButtonClassName = classNames(styles.stepperElement, {
    [styles.buttonDisable]: count >= 6,
  });

  const handleButtonBuyClick = () => {
    const { day, month, year } = parseEventDate(event.startDate);
    const dateToString = `${day} ${month} ${year}`;

    const item: ShoppingCartItem = {
      ticket: { title, price, id, quantity: count, description },
      event: {
        title: event.title,
        date: dateToString,
        externalImageUrls: event.externalImageUrls,
        id: event.id,
      },
    };

    addItem(item);
    openCart();
  };

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
        <div className={styles.stepper}>
          <button
            className={decreaseButtonClassName}
            onClick={() => setNewTicketCount("decrease", count, setCount)}
          >
            <SubtractLineIcon className={styles.countIcon} />
          </button>
          <Text tag="div" variant="action-1" className={styles.count}>
            {count}
          </Text>
          <button
            className={increaseButtonClassName}
            onClick={() => setNewTicketCount("increase", count, setCount)}
          >
            <AddLineIcon className={styles.countIcon} />
          </button>
        </div>
        <div className={styles.button} onClick={handleButtonBuyClick}>
          <Button variant="narrow" text="Buy!" />
        </div>
      </div>
      {isSoldOut && <TicketSoldOut />}
    </div>
  );
};
