import { CategoryTile } from "../categoryTile/CategoryTile";
import styles from "./categoriesSection.module.scss";
import varials from "../../assets/categories/festivals.png";
import pop from "../../assets/categories/pop.png";
import electronic from "../../assets/categories/electronic.png";
import rock from "../../assets/categories/rock.png";
import classical from "../../assets/categories/classical.png";
import country from "../../assets/categories/country.png";
import alternative from "../../assets/categories/alternative.png";
import film from "../../assets/categories/film.png";
import { Carousel } from "../carousel/Carousel";
import { EventDto } from "../../services/api/api-types.gen";
import { categoriesToLabelMap } from "../../services/api/event/categoriesToLabelMap";

const categoriesToPicturesSmallMap: Partial<
  Record<EventDto.CategoryEnum, string>
> = {
  [EventDto.CategoryEnum.Music]: varials,
  [EventDto.CategoryEnum.PopMusic]: pop,
  [EventDto.CategoryEnum.ElectronicMusic]: electronic,
  [EventDto.CategoryEnum.RockMusic]: rock,
  [EventDto.CategoryEnum.ClassicalMusic]: classical,
  [EventDto.CategoryEnum.CountryMusic]: country,
  [EventDto.CategoryEnum.AlternativeMusic]: alternative,
  [EventDto.CategoryEnum.FilmMusic]: film,
};

export const CategoriesSection = () => {
  return (
    <div className={styles.categoriesSection}>
      <Carousel title="Categories" elementWidth={190} gap={32}>
        <div className={styles.categories}>
          {Object.entries(categoriesToLabelMap).map(
            ([categoryKey, categoryName]) => (
              <div key={categoryKey}>
                <CategoryTile
                  text={categoryName}
                  picture={
                    categoriesToPicturesSmallMap[
                      categoryKey as EventDto.CategoryEnum
                    ] || ""
                  }
                  linkTo={categoryKey}
                />
              </div>
            )
          )}
        </div>
      </Carousel>
    </div>
  );
};
