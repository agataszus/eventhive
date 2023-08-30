import { useShoppingCartStore } from "../../services/shoppingCartStore/useShoppingCartStore";
import { CheckoutSummary } from "../checkoutSummary/CheckoutSummary";
import { EmptyCart } from "../emptyCart/EmptyCart";
import { Text } from "../text/text";
import styles from "./checkoutSidebar.module.scss";

export const CheckOutSidebar = () => {
  const {
    state: { cartContent },
  } = useShoppingCartStore();

  return (
    <div className={styles.checkoutSummary}>
      {cartContent.length ? (
        <CheckoutSummary />
      ) : (
        <div className={styles.checkoutContainer}>
          <Text tag="div" variant="heading-5" className={styles.title}>
            Checkout summary
          </Text>
          <EmptyCart />
        </div>
      )}
    </div>
  );
};
