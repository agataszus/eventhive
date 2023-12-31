import { CartButton } from "../cartButton/CartButton";
import { SearchBar } from "../searchBar/SearchBar";
import { Title } from "../title/Title";
import styles from "./topBar.module.scss";

type TopBarProps = {
  title: string;
};

export const TopBar = ({ title }: TopBarProps) => {
  return (
    <div className={styles.topBar}>
      <Title title={title} />
      <div className={styles.actionContainer}>
        <SearchBar />
        <CartButton />
      </div>
    </div>
  );
};
