import { Button } from "../button/Button";
import { Divider } from "../divider/Divider";
import { Text } from "../text/text";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import styles from "./shoppingCart.module.scss";
import { ShoppingItem } from "../shoppingItem/ShoppingItem";

export const ShoppingCart = () => {
  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.cart}>
        <div className={styles.titleLabel}>
          <Text tag="h5" variant="heading-5">
            Cart
          </Text>
          <CloseLineIcon className={styles.icon} />
        </div>
        <Divider />
        <div className={styles.itemsContainer}>
          <ShoppingItem />
          <ShoppingItem />
        </div>
        <div className={styles.buttonContainer}>
          <Button variant="thick" text="Proceed to checkout" />
        </div>
      </div>
    </>
  );
};
