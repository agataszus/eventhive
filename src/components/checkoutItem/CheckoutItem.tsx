import { Link } from "react-router-dom";
import { ShoppingCartItem } from "../../services/useShoppingCartStore/types";
import { getEventPath } from "../routes/paths";
import { Text } from "../text/text";
import styles from "./checkoutItem.module.scss";
import { useShoppingCartStore } from "../../services/useShoppingCartStore/useShoppingCartStore";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import { Stepper } from "../stepper/Stepper";
import { countAndParsePrice } from "../../helpers/countAndParsePrice";

type CheckoutItemProps = {
  item: ShoppingCartItem;
};

export const CheckoutItem = ({ item }: CheckoutItemProps) => {
  const { event, ticket } = item;
  const summaryPrice = countAndParsePrice(ticket.quantity, ticket.price);
  const { removeItem } = useShoppingCartStore();

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={event.externalImageUrls[0]} className={styles.img} />
      </div>
      <div className={styles.itemDescription}>
        <div className={styles.eventContainer}>
          <Link to={getEventPath(event.id)}>
            <Text tag="h6" variant="heading-6" className={styles.title}>
              {event.title}
            </Text>
          </Link>
          <Text tag="p" variant="subtitle-5">
            {event.date}
          </Text>
        </div>
        <div className={styles.ticketInformationContainer}>
          <Text tag="p" variant="subtitle-3" className={styles.ticketName}>
            {ticket.title}
          </Text>
          <Text
            tag="p"
            variant="caption-2"
            className={styles.ticketDescription}
          >
            {ticket.description}
          </Text>
        </div>
      </div>
      <Text tag="div" variant="heading-6" className={styles.priceContainer}>
        {summaryPrice}
      </Text>
      <div className={styles.stepperContainer}>
        <Stepper ticket={ticket} />
      </div>
      <div className={styles.binContainer}>
        <DeleteBin6LineIcon
          className={styles.binIcon}
          onClick={() => removeItem(item)}
        />
      </div>
    </div>
  );
};
