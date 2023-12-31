import ShoppingCart2LineIcon from "remixicon-react/ShoppingCart2LineIcon";
import { Text } from "../text/Text";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { getDashboardHomePath } from "../routes/paths";
import { useShoppingCartStore } from "../../services/shoppingCartStore/useShoppingCartStore";
import styles from "./emptyCart.module.scss";

export const EmptyCart = () => {
  const { closeCart } = useShoppingCartStore();
  const navigate = useNavigate();

  return (
    <div className={styles.emptyCartContainer}>
      <ShoppingCart2LineIcon className={styles.emptyCartIcon} />
      <Text tag="p" variant="action-3" className={styles.emptyCartText}>
        Your cart is empty
      </Text>
      <Text tag="p" variant="caption-2" className={styles.emptyCartSubtitle}>
        Add tickets to cart to see them here
      </Text>
      <div className={styles.buttonExplore}>
        <Button
          text="Explore events"
          variant="thick"
          onClick={() => {
            navigate(getDashboardHomePath());
            closeCart();
          }}
        />
      </div>
    </div>
  );
};
