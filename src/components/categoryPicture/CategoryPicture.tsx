import { EventDto } from "../../services/api/api-types.gen";
import styles from "./categoryPicture.module.scss";
import { Text } from "../text/text";
import { categoriesToLabelMap } from "../../services/api/event/categoriesToLabelMap";
import { categoriesToPicturesMap } from "../../pages/dashboard/categoryPage/categoriesToPicturesMap";

const getDarkenBackgroundImage = (url: string) => `linear-gradient(
    165deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.65) 40%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0)
  ),
  url(${url})`;

type CategoryPictureProps = {
  category: EventDto.CategoryEnum;
};

export const CategoryPicture = ({ category }: CategoryPictureProps) => {
  const picture = categoriesToPicturesMap[category];

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
        {categoriesToLabelMap[category]}
      </Text>
      <div className={styles.backgroundTitle}>
        {categoriesToLabelMap[category]}
      </div>
    </div>
  );
};
