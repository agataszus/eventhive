import { CheckoutItemsSection } from "../../../components/checkoutItemsSection/CheckoutItemsSection";
import { CheckOutSidebar } from "../../../components/checkoutSidebar/CheckoutSidebar";
import { TopBar } from "../../../components/topBar/TopBar";
import styles from "./checkoutPage.module.scss";

export const CheckoutPage = () => {
  return (
    <div className={styles.page}>
      <TopBar title="Checkout" />
      <div className={styles.content}>
        <div className={styles.itemsSection}>
          <CheckoutItemsSection />
        </div>
        <CheckOutSidebar />
      </div>
    </div>
  );
};
