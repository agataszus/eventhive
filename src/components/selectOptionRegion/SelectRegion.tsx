import { ChangeEvent, useEffect, useState } from "react";
import styles from "./selectRegion.module.scss";
import { Text } from "../text/text";

type SelectOptionRegionProps = {
  name: string;
  defaultValue?: string;
  labelText?: string;
};

export const SelectOptionRegion = ({
  name,
  defaultValue,
  labelText,
}: SelectOptionRegionProps) => {
  const [region, setRegion] = useState(defaultValue);

  useEffect(() => {
    setRegion(defaultValue);
  }, [defaultValue]);

  return (
    <div className={styles.selectContainer}>
      {labelText && (
        <label htmlFor={name}>
          <Text tag="span" variant="subtitle-5">
            {labelText}
          </Text>
        </label>
      )}
      <select
        value={region}
        className={styles.select}
        name={name}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          setRegion(event.target.value)
        }
      >
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
