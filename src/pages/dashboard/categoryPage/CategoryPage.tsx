import { useLocation } from "react-router-dom";
import { TopBar } from "../../../components/topBar/TopBar";
import { categoriesToLabelMap } from "../../../services/api/event/categoriesToLabelMap";
import { EventDto } from "../../../services/api/api-types.gen";
import { CategoryPicture } from "../../../components/categoryPicture/CategoryPicture";
import styles from "./categoryPage.module.scss";
import { useEventsQuery } from "../../../queries/useEventsQuery";
import { CategoryEventCard } from "../../../components/categoryEventCard/CategoryEventCard";
import { CategoriesSection } from "../../../components/categoriesSection/CategoriesSection";
import { categoriesToPicturesMap } from "./categoriesToPicturesMap";
import { Error } from "../../../components/error/Error";
import { Loader } from "../../../components/loader/Loader";
import { useTopbarVisibleCheck } from "../../../hooks/useTopbarVisibleCheck";
import { useEffect, useState } from "react";

const getGradientOnImage = (
  url: string
) => `linear-gradient(to right, #191919ef, #191919ef),
      url(${url})`;

const checkIsCategoryEnum = (
  category: string
): category is EventDto.CategoryEnum => {
  return Object.values(EventDto.CategoryEnum).some(
    (value) => value === category
  );
};

export const CategoryPage = () => {
  const { pathname } = useLocation();
  const { data: events, isLoading, isError, isSuccess } = useEventsQuery();

  const isTopbar = useTopbarVisibleCheck();
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    setIsTopbarVisible(isTopbar);
  }, [isTopbar]);

  const pathnameArray = pathname.split("/");
  const category = pathnameArray[pathnameArray.length - 1];

  const isValidCategory = checkIsCategoryEnum(category);

  if (!isValidCategory)
    return (
      <div className={styles.page}>
        <TopBar title="---------" />
        <div className={styles.content}>
          <Error message="Category doesn't exist" />
        </div>
        <CategoriesSection />
      </div>
    );

  const picture = categoriesToPicturesMap[category];

  const categoryEvents = events?.filter((event) => event.category === category);

  return (
    <div className={styles.page}>
      {isTopbarVisible && (
        <TopBar title={categoriesToLabelMap[category] ?? "Unknown"} />
      )}
      <CategoryPicture category={category} />
      <div
        className={styles.content}
        style={
          picture ? { backgroundImage: getGradientOnImage(picture) } : undefined
        }
      >
        {isLoading && <Loader variant="large" />}
        {isError && <Error message="Couldn't load events" />}
        {isSuccess && !categoryEvents?.length && (
          <Error message="There are no events in this category" />
        )}
        <div className={styles.eventsContainer}>
          {categoryEvents?.map((event) => (
            <CategoryEventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
      <CategoriesSection />
    </div>
  );
};
