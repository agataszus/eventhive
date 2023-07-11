import { Text } from "../text/text";
import styles from "./input.module.scss";

type InputProps = {
  labelText?: string;
  name: string;
  type: "text" | "password" | "number";
  placeholder: string;
  defaultValue?: string;
};

export const Input = ({
  name,
  type,
  placeholder,
  defaultValue,
  labelText,
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      {labelText && (
        <label htmlFor={name}>
          <Text tag="span" variant="subtitle-5">
            {labelText}
          </Text>
        </label>
      )}
      <input
        className={styles.input}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      ></input>
    </div>
  );
};
