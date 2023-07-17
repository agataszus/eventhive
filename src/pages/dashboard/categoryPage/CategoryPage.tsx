import { useLocation } from "react-router-dom";
import { TopBar } from "../../../components/topBar/TopBar";
import { eventsCategories } from "../../../services/api/event/eventsCategories";
import { EventDto } from "../../../services/api/api-types.gen";
import { CategoryPicture } from "../../../components/categoryPicture/CategoryPicture";
import styles from "./categoryPage.module.scss";
import { useEventsQuery } from "../../../queries/useEventsQuery";
import { CategoryEventCard } from "../../../components/categoryEventCard/CategoryEventCard";
import { CategoriesSection } from "../../../components/categoriesSection/CategoriesSection";
import { categoriesPictures } from "./categoriesPictures";
import { Error } from "../../../components/error/Error";
import { Loader } from "../../../components/loader/Loader";

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

  const pathnameArray = pathname.split("/");
  const category = pathnameArray[pathnameArray.length - 1];

  const isValidCategory = checkIsCategoryEnum(category);

  if (!isValidCategory)
    return (
      <div>
        <TopBar title="---------" />
        <div className={styles.content}>
          <Error message="Category doesn't exist" />
        </div>
        <CategoriesSection />
      </div>
    );

  const picture = categoriesPictures[category];

  const getGradientOnImage = (
    url: string
  ) => `linear-gradient(to right, #191919ef, #191919ef),
      url(${url})`;

  const categoryEvents = events?.filter((event) => event.category === category);

  return (
    <div>
      <TopBar title={eventsCategories[category] ?? "Unknown"} />
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
          <Error message="There is no events in this category" />
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
