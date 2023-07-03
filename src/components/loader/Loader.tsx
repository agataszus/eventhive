import classNames from "classnames";
import styles from "./loader.module.scss";

type LoaderProps = {
  variant: "small" | "medium" | "large";
};

export const Loader = ({ variant }: LoaderProps) => {
  const loaderStyles = classNames(styles.ldsRing, styles[variant]);

  return (
    <div className={loaderStyles}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
