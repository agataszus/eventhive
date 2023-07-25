import { Text } from "../text/text";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import styles from "./shoppingItem.module.scss";
import { ShoppingCartItem } from "../../services/useShoppingCartStore/types";
import { useShoppingCartStore } from "../../services/useShoppingCartStore/useShoppingCartStore";
import { Link } from "react-router-dom";
import { getEventPath } from "../routes/paths";
import { Stepper } from "../stepper/Stepper";
import { countAndParsePrice } from "../../helpers/countAndParsePrice";

type ShoppingItemProps = {
  item: ShoppingCartItem;
};
export const ShoppingItem = ({ item }: ShoppingItemProps) => {
  const { event, ticket } = item;
  const summaryPrice = countAndParsePrice(ticket.price, ticket.quantity);
  const { removeItem, closeCart } = useShoppingCartStore();

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={event.externalImageUrls[0]} className={styles.img} />
      </div>
      <div className={styles.itemDescription}>
        <div className={styles.ticketInformationRow}>
          <div className={styles.eventContainer}>
            <Link to={getEventPath(event.id)} onClick={closeCart}>
              <Text tag="h6" variant="heading-6" className={styles.title}>
                {event.title}
              </Text>
            </Link>
            <Text tag="p" variant="subtitle-5">
              {event.date}
            </Text>
          </div>
          <DeleteBin6LineIcon
            className={styles.binIcon}
            onClick={() => removeItem(item)}
          />
        </div>
        <div className={styles.ticketInformationContainer}>
          <div className={styles.ticketInformationRow}>
            <Text tag="p" variant="subtitle-3" className={styles.ticketName}>
              {ticket.title}
            </Text>
            <Stepper ticket={ticket} />
          </div>
          <div className={styles.price}>
            <Text tag="p" variant="caption-1">
              {summaryPrice}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
