import { useShoppingCartStore } from "../../services/useShoppingCartStore/useShoppingCartStore";
import { CheckoutItem } from "../checkoutItem/CheckoutItem";
import styles from "./checkoutItemsSection.module.scss";

export const CheckoutItemsSection = () => {
  const {
    state: { cartContent },
  } = useShoppingCartStore();

  return (
    <div className={styles.section}>
      <div className={styles.itemsContainer}>
        {cartContent.map((item) => (
          <CheckoutItem item={item} key={item.ticket.id} />
        ))}
      </div>
    </div>
  );
};
