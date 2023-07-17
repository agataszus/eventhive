import { EventDto } from "../../services/api/api-types.gen";
import styles from "./categoryPicture.module.scss";
import { Text } from "../text/text";
import { eventsCategories } from "../../services/api/event/eventsCategories";
import { categoriesPictures } from "../../pages/dashboard/categoryPage/categoriesPictures";

type CategoryPictureProps = {
  category: EventDto.CategoryEnum;
};

export const CategoryPicture = ({ category }: CategoryPictureProps) => {
  const picture = categoriesPictures[category];

  const getDarkenBackgroundImage = (url: string) => `linear-gradient(
    165deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.65) 40%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0)
  ),
  url(${url})`;

  return (
    <div
      className={styles.imageContainer}
      style={
        picture
          ? {
              backgroundImage: getDarkenBackgroundImage(picture),
            }
          : undefined
      }
    >
      <Text tag="h3" variant="heading-2" className={styles.title}>
        {eventsCategories[category]}
      </Text>
      <div className={styles.backgroundTitle}>{eventsCategories[category]}</div>
    </div>
  );
};
