import { Modal } from "../modal/Modal";
import Coupon2LineIcon from "remixicon-react/Coupon2LineIcon";
import { Text } from "../text/text";
import { Button } from "../button/Button";
import styles from "./paymentSuccessModal.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyTicketsPath } from "../routes/paths";
import { useShoppingCartStore } from "../../services/useShoppingCartStore/useShoppingCartStore";
import { MOBILE, useMediaQueries } from "../../hooks/useMediaQueries";

type PaymentSuccessModalProps = {
  isOpen: boolean;
};

export const PaymentSuccessModal = ({ isOpen }: PaymentSuccessModalProps) => {
  const { clearCart } = useShoppingCartStore();
  const [count, setCount] = useState(10);
  const navigate = useNavigate();
  const mediaQuery = useMediaQueries();

  useEffect(() => {
    if (!isOpen) return;
    if (count === 0) {
      navigate(getMyTicketsPath());
      clearCart();
    }
    const countTimeoutId = setTimeout(() => setCount(count - 1), 1000);

    return () => clearInterval(countTimeoutId);
  }, [count, navigate, isOpen, clearCart]);

  return (
    <Modal
      isOpen={isOpen}
      isLoading={false}
      isError={false}
      errorMessage=""
      variant={mediaQuery === MOBILE ? "narrow" : "thick"}
    >
      <div className={styles.content}>
        <Coupon2LineIcon className={styles.icon} />
        <Text tag="p" variant="action-5" className={styles.success}>
          Success!
        </Text>
        <Text tag="p" variant="caption-2" className={styles.message}>
          Your payment was processed successfully. You will be redirected to see
          your tickets in {count} seconds or you can click below.
        </Text>
        <div className={styles.buttonContainer}>
          <Button
            variant="thick"
            text="See your tickets"
            onClick={() => {
              navigate(getMyTicketsPath());
              clearCart();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
