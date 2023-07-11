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
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
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
