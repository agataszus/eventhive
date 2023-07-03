import { Search } from "../search/Search";
import { Title } from "../title/Title";
import styles from "./topBar.module.scss";

type TopBarProps = {
  title: string;
};

export const TopBar = ({ title }: TopBarProps) => {
  return (
    <div className={styles.topBar}>
      <Title title={title} />
      <Search />
    </div>
  );
};
