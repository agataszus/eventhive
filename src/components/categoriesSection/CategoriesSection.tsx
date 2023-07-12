import { CategoryTile } from "../categoryTile/CategoryTile";
import styles from "./categoriesSection.module.scss";
import festivals from "../../assets/categories/festivals.png";
import pop from "../../assets/categories/pop.png";
import electronic from "../../assets/categories/electronic.png";
import rock from "../../assets/categories/rock.png";
import classical from "../../assets/categories/classical.png";
import country from "../../assets/categories/country.png";
import alternative from "../../assets/categories/alternative.png";
import film from "../../assets/categories/film.png";
import { Carousel } from "../carousel/Carousel";

export const CategoriesSection = () => {
  return (
    <div className={styles.categoriesSection}>
      <Carousel title="Categories">
        <div className={styles.categories}>
          <CategoryTile text="Festivals" picture={festivals} />
          <CategoryTile text="Pop" picture={pop} />
          <CategoryTile text="Electronic" picture={electronic} />
          <CategoryTile text="Rock" picture={rock} />
          <CategoryTile text="Classical" picture={classical} />
          <CategoryTile text="Country" picture={country} />
          <CategoryTile text="Alternative" picture={alternative} />
          <CategoryTile text="Film Music" picture={film} />
        </div>
      </Carousel>
    </div>
  );
};
