import { Text } from "../text/text";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import SubtractLineIcon from "remixicon-react/SubtractLineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import styles from "./shoppingItem.module.scss";
import { ShoppingCartItem } from "../../services/useShoppingCartStore/types";
import { parsePrice } from "../../helpers/parsePrice";
import { useShoppingCartStore } from "../../services/useShoppingCartStore/useShoppingCartStore";
import { Link } from "react-router-dom";
import { getEventPath } from "../routes/paths";
import classNames from "classnames";

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
  const { quantity } = ticket;
  const summaryPrice = countPrice(ticket.price, ticket.quantity);
  const { updateItemCount, removeItem, closeCart } = useShoppingCartStore();

  const decreaseButtonClassName = classNames(styles.stepperElement, {
    [styles.buttonDisable]: quantity <= 1,
  });

  const increaseButtonClassName = classNames(styles.stepperElement, {
    [styles.buttonDisable]: quantity >= 6,
  });

  const handleChangeCount = (variant: "decrease" | "increase") => {
    if (variant === "decrease") {
      if (quantity === 1) return;

      updateItemCount({ id: ticket.id, count: quantity - 1 });
    }

    if (variant === "increase") {
      if (quantity === 6) return;

      updateItemCount({ id: ticket.id, count: quantity + 1 });
    }
  };

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
                className={decreaseButtonClassName}
                onClick={() => handleChangeCount("decrease")}
              >
                <SubtractLineIcon className={styles.countIcon} />
              </button>
              <Text tag="div" variant="action-2" className={styles.count}>
                {ticket.quantity}
              </Text>
              <button
                className={increaseButtonClassName}
                onClick={() => handleChangeCount("increase")}
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
