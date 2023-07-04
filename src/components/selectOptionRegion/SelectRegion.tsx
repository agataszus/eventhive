import styles from "./selectRegion.module.scss";

type SelectOptionRegionProps = {
  name: string;
};

export const SelectOptionRegion = ({ name }: SelectOptionRegionProps) => {
  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} name={name}>
        <option value="">Select region</option>
        <option value="PL">PL</option>
        <option value="US">US</option>
        <option value="DE">DE</option>
        <option value="FR">FR</option>
        <option value="CZ">CZ</option>
        <option value="IT">IT</option>
      </select>
    </div>
  );
};
