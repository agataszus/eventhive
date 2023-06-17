import styles from "./input.module.scss";

type InputProps = {
  labelText: string;
  name: string;
  type: "text" | "password" | "number";
  placeholder: string;
};

export const Input = ({ labelText, name, type, placeholder }: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>{labelText}</label>
      <input
        className={styles.input}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
