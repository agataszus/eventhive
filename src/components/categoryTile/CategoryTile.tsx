import { Link } from "react-router-dom";
import { SeeMoreOverlay } from "../seeMoreOverlay/SeeMoreOverlay";
import { Text } from "../text/text";
import styles from "./categoryTile.module.scss";
import { getCategoryPath } from "../routes/paths";
import { LazyLoadImage } from "react-lazy-load-image-component";

type CategoryTileProps = {
  text: string;
  picture: string;
  linkTo: string;
};

export const CategoryTile = ({ text, picture, linkTo }: CategoryTileProps) => {
  return (
    <Link to={getCategoryPath(linkTo)} className={styles.categoryTile}>
      <div className={styles.imageBox}>
        <SeeMoreOverlay
          overlayClassName={styles.overlay}
          iconClassName={styles.overlayIcon}
        />
        <LazyLoadImage alt={text} src={picture} className={styles.image} />
      </div>
      <Text tag="h4" variant="caption-1">
        {text}
      </Text>
    </Link>
  );
};
