import { CheckoutItemsSection } from "../../../components/checkoutItemsSection/CheckoutItemsSection";
import { TopBar } from "../../../components/topBar/TopBar";
import styles from "./checkoutPage.module.scss";

export const CheckoutPage = () => {
  return (
    <div className={styles.page}>
      <TopBar title="Checkout" />
      <div>
        <CheckoutItemsSection />
      </div>
    </div>
  );
};
