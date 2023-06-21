import { Text } from "../text/text";
import styles from "./categoryTile.module.scss";

type CategoryTileProps = {
  text: string;
  picture: string;
};

export const CategoryTile = ({ text, picture }: CategoryTileProps) => {
  return (
    <div className={styles.categoryTile}>
      <div className={styles.imageBox}>
        <img src={picture} alt={text} className={styles.image} />
      </div>
      <Text tag="h4" variant="action-1">
        {text}
      </Text>
    </div>
  );
};