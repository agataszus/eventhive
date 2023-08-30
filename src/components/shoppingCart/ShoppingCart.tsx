import { Button } from "../button/Button";
import { Divider } from "../divider/Divider";
import { Text } from "../text/text";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import styles from "./shoppingCart.module.scss";
import { ShoppingItem } from "../shoppingItem/ShoppingItem";
import { useShoppingCartStore } from "../../services/shoppingCartStore/useShoppingCartStore";
import { parsePrice } from "../../helpers/parsePrice";
import { useNavigate } from "react-router-dom";
import { getCheckoutPath } from "../routes/paths";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { EmptyCart } from "../emptyCart/EmptyCart";
import { useScrollLock } from "../../hooks/useScrollLock";

export const ShoppingCart = () => {
  const { closeCart, state } = useShoppingCartStore();
  const { cartContent, isShoppingCartOpen } = state;
  const navigate = useNavigate();
  const [wasShoppingCartOpen, setWasShoppingCartOpen] = useState(false);

  useEffect(() => {
    if (isShoppingCartOpen && !wasShoppingCartOpen)
      setWasShoppingCartOpen(true);
  }, [isShoppingCartOpen, wasShoppingCartOpen]);

  useScrollLock(isShoppingCartOpen);

  if (!wasShoppingCartOpen) return null;

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
        {cartContent.length === 0 && <EmptyCart />}
        <div className={styles.itemsContainer}>
          {cartContent.map((item) => (
            <ShoppingItem item={item} key={item.ticket.id} />
          ))}
        </div>
        {cartContent.length !== 0 && (
          <div className={styles.checkoutContainer}>
            <div className={styles.subtotalPriceContainer}>
              <Text tag="h6" variant="action-1">
                Subtotal
              </Text>
              <Text tag="h6" variant="action-1">
                {subtotalPrice}
              </Text>
            </div>
            <Text tag="p" variant="caption-2">
              Fees calculated at checkout
            </Text>
            <Button
              variant="thick"
              text="Proceed to checkout"
              onClick={() => {
                navigate(getCheckoutPath());
                closeCart();
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};
