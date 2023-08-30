import classNames from "classnames";
import { useShoppingCartStore } from "../../services/shoppingCartStore/useShoppingCartStore";
import { Text } from "../text/text";
import SubtractLineIcon from "remixicon-react/SubtractLineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import styles from "./stepper.module.scss";

type StepperProps = {
  ticket: {
    title: string;
    quantity: number;
    price: number;
    id: number;
    description: string;
  };
};

export const Stepper = ({ ticket }: StepperProps) => {
  const { quantity, id } = ticket;
  const { updateItemCount } = useShoppingCartStore();

  const decreaseButtonClassName = classNames(styles.stepperElement, {
    [styles.buttonDisable]: quantity <= 1,
  });

  const increaseButtonClassName = classNames(styles.stepperElement, {
    [styles.buttonDisable]: quantity >= 6,
  });

  const handleChangeCount = (variant: "decrease" | "increase") => {
    if (variant === "decrease") {
      if (quantity === 1) return;

      updateItemCount({ id, count: quantity - 1 });
    }

    if (variant === "increase") {
      if (quantity === 6) return;

      updateItemCount({ id, count: quantity + 1 });
    }
  };

  return (
    <div className={styles.stepper}>
      <button
        className={decreaseButtonClassName}
        onClick={() => handleChangeCount("decrease")}
      >
        <SubtractLineIcon className={styles.countIcon} />
      </button>
      <Text tag="div" variant="action-1" className={styles.count}>
        {quantity}
      </Text>
      <button
        className={increaseButtonClassName}
        onClick={() => handleChangeCount("increase")}
      >
        <AddLineIcon className={styles.countIcon} />
      </button>
    </div>
  );
};
