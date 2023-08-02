import ShoppingCartLineIcon from "remixicon-react/ShoppingCartLineIcon";
import styles from "./cartButton.module.scss";
import { useShoppingCartStore } from "../../services/useShoppingCartStore/useShoppingCartStore";

export const CartButton = () => {
  const { openCart } = useShoppingCartStore();

  return (
    <button className={styles.button} onClick={openCart}>
      <ShoppingCartLineIcon className={styles.icon} />
    </button>
  );
};
