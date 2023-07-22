import { Text } from "../text/text";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import SubtractLineIcon from "remixicon-react/SubtractLineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import styles from "./shoppingItem.module.scss";
import festivalImg from "../../assets/orangeWarsaw.jpeg";
import { ShoppingCartItem } from "../../services/useShoppingCartStore/types";
import { parsePrice } from "../../helpers/parsePrice";
import { useEffect, useState } from "react";
import { handleChangeCount } from "../../helpers/handleChangeCount";
import { useShoppingCartStore } from "../../services/useShoppingCartStore/useShoppingCartStore";
import { Link } from "react-router-dom";
import { getEventPath } from "../routes/paths";

type ShoppingItemProps = {
  item: ShoppingCartItem;
};

const countPrice = (ticketPrice: number, ticketQuantity: number) => {
  const price = ticketQuantity * ticketPrice;
  const parsedPrise = parsePrice(price);
  return parsedPrise;
};

export const ShoppingItem = ({ item }: ShoppingItemProps) => {
  const { event, ticket } = item;
  const summaryPrice = countPrice(ticket.price, ticket.quantity);
  const [count, setCount] = useState(ticket.quantity);
  const { updateItemCount, removeItem, closeCart } = useShoppingCartStore();

  useEffect(() => {
    updateItemCount({ id: ticket.id, count });
  }, [ticket.id, count, updateItemCount]);

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
            <div className={styles.stepper}>
              <button
                className={styles.stepperElement}
                onClick={() => handleChangeCount("decrease", count, setCount)}
              >
                <SubtractLineIcon className={styles.countIcon} />
              </button>
              <Text tag="div" variant="action-2" className={styles.count}>
                {count}
              </Text>
              <button
                className={styles.stepperElement}
                onClick={() => handleChangeCount("increase", count, setCount)}
              >
                <AddLineIcon className={styles.countIcon} />
              </button>
            </div>
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
