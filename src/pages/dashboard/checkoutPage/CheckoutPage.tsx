import { useEffect, useState } from "react";
import { CheckoutItemsSection } from "../../../components/checkoutItemsSection/CheckoutItemsSection";
import { CheckOutSidebar } from "../../../components/checkoutSidebar/CheckoutSidebar";
import { TopBar } from "../../../components/topBar/TopBar";
import { useTopbarVisibleCheck } from "../../../hooks/useTopbarVisibleCheck";
import styles from "./checkoutPage.module.scss";

export const CheckoutPage = () => {
  const isTopbar = useTopbarVisibleCheck();
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    setIsTopbarVisible(isTopbar);
  }, [isTopbar]);

  return (
    <div className={styles.page}>
      {isTopbarVisible && <TopBar title="Checkout" />}
      <div className={styles.content}>
        <div className={styles.itemsSection}>
          <CheckoutItemsSection />
        </div>
        <CheckOutSidebar />
      </div>
    </div>
  );
};
