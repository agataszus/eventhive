import { CategoriesSection } from "../../../components/categoriesSection/CategoriesSection";
import { PopularEventsSection } from "../../../components/popularEventsSection/PopularEventsSection";
import { HighlightedEventCard } from "../../../components/highlightedEventCard/HighlightedEventCard";
import { TopBar } from "../../../components/topBar/TopBar";
import styles from "./homePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <TopBar title="Events" />
      <div>
        <div className={styles.content}>
          <HighlightedEventCard />
        </div>
        <div className={styles.categoriesSection}>
          <CategoriesSection />
        </div>
        <div>
          <PopularEventsSection />
        </div>
      </div>
    </div>
  );
};
