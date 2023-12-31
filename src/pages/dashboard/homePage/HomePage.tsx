import { CategoriesSection } from "../../../components/categoriesSection/CategoriesSection";
import { PopularEventsSection } from "../../../components/popularEventsSection/PopularEventsSection";
import { HighlightedEventCard } from "../../../components/highlightedEventCard/HighlightedEventCard";
import { TopBar } from "../../../components/topBar/TopBar";
import styles from "./homePage.module.scss";
import { useTopbarVisibleCheck } from "../../../hooks/useTopbarVisibleCheck";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const isTopbar = useTopbarVisibleCheck();
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    setIsTopbarVisible(isTopbar);
  }, [isTopbar]);

  return (
    <div className={styles.page}>
      {isTopbarVisible && <TopBar title="Events" />}
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
