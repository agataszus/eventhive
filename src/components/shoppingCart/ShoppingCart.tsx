import { Button } from "../button/Button";
import { Divider } from "../divider/Divider";
import { Text } from "../text/text";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import styles from "./shoppingCart.module.scss";
import { ShoppingItem } from "../shoppingItem/ShoppingItem";
import { useShoppingCartStore } from "../../services/useShoppingCartStore/useShoppingCartStore";
import { parsePrice } from "../../helpers/parsePrice";
import ShoppingCart2LineIcon from "remixicon-react/ShoppingCart2LineIcon";
import { useNavigate } from "react-router-dom";
import { getDashboardHomePath } from "../routes/paths";
import classNames from "classnames";

export const ShoppingCart = () => {
  const { closeCart, state } = useShoppingCartStore();
  const { cartContent, isShoppingCartOpen } = state;
  const navigate = useNavigate();

  const subtotalPrice = parsePrice(
    cartContent.reduce(
      (sum, { ticket: { quantity, price } }) => sum + quantity * price,
      0
    )
  );

  const overlayClassName = classNames(styles.overlay, {
    [styles.overlayOpen]: isShoppingCartOpen,
    [styles.overlayClose]: !isShoppingCartOpen,
  });

  const cartClassName = classNames(styles.cart, {
    [styles.cartOpen]: isShoppingCartOpen,
    [styles.cartClose]: !isShoppingCartOpen,
  });

  return (
    <>
      <div className={overlayClassName} onClick={closeCart} />
      <div className={cartClassName}>
        <div className={styles.titleLabel}>
          <Text tag="h5" variant="heading-5">
            Cart
          </Text>
          <CloseLineIcon className={styles.icon} onClick={() => closeCart()} />
        </div>
        <Divider />
        {cartContent.length === 0 && (
          <div className={styles.emptyCartContainer}>
            <ShoppingCart2LineIcon className={styles.emptyCartIcon} />
            <Text tag="p" variant="action-5" className={styles.emptyCartText}>
              Your cart is empty
            </Text>
            <Text tag="p" variant="caption-2">
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
        )}
        <div className={styles.itemsContainer}>
          {cartContent.map((item) => (
            <ShoppingItem item={item} key={item.ticket.id} />
          ))}
        </div>
        {cartContent.length !== 0 && (
          <div className={styles.checkoutContainer}>
            <div className={styles.subtotalPriceContainer}>
              <Text tag="h6" variant="action-2">
                Subtotal
              </Text>
              <Text tag="h6" variant="action-2">
                {subtotalPrice}
              </Text>
            </div>
            <Text tag="p" variant="caption-2">
              Fees calculated at checkout
            </Text>
            <Button variant="thick" text="Proceed to checkout" />
          </div>
        )}
      </div>
    </>
  );
};
