import SearchLineIcon from "remixicon-react/SearchLineIcon";
import styles from "./search.module.scss";

export const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
      ></input>
      <button className={styles.button}>
        <SearchLineIcon className={styles.icon} />
      </button>
    </div>
  );
};
