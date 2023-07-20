import { Button } from "../button/Button";
import { Divider } from "../divider/Divider";
import { Text } from "../text/text";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import styles from "./shoppingCart.module.scss";
import { useState } from "react";

export const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className={styles.cart}>
      <div className={styles.titleLabel}>
        <Text tag="h5" variant="heading-5">
          Cart
        </Text>
        <CloseLineIcon className={styles.icon} />
      </div>
      <div className={styles.divider}>
        <Divider />
      </div>
      <div>{/* items */}</div>
      <div className={styles.buttonContainer}>
        <Button variant="thick" text="Proceed to checkout" />
      </div>
    </div>
  );
};
