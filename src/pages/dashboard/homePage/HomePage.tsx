import { CategoriesBox } from "../../../components/categoriesBox/CategoriesBox";
import { HighlightedEventCard } from "../../../components/highlightedEventCard/HighlightedEventCard";
import { PopularEvents } from "../../../components/popularEvents/PopularEvents";
import { TopBar } from "../../../components/topBar/TopBar";
import styles from "./homePage.module.scss";

export const HomePage = () => {
  return (
    <div>
      <div>
        <TopBar title="Events" />
      </div>
      <div>
        <div className={styles.content}>
          <HighlightedEventCard />
        </div>
        <div className={styles.categoriesBox}>
          <CategoriesBox />
        </div>
        <div>
          <PopularEvents />
        </div>
      </div>
    </div>
  );
};
