import { ReactNode } from "react";
import styles from "./text.module.scss";
import classNames from "classnames";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

type Variant =
  | "action-1"
  | "action-2"
  | "action-3"
  | "action-4"
  | "subtitle-1"
  | "subtitle-2"
  | "subtitle-3"
  | "subtitle-4"
  | "caption-1"
  | "caption-2"
  | "caption-3"
  | "heading-1"
  | "heading-2"
  | "num-1";

type TextProps = {
  children: ReactNode;
  tag: Tag;
  variant: Variant;
  extraClass?: string;
};

export const Text = ({ children, tag, variant, extraClass }: TextProps) => {
  const className = classNames(styles[variant], extraClass);

  switch (tag) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "h4":
      return <h4 className={className}>{children}</h4>;
    case "h5":
      return <h5 className={className}>{children}</h5>;
    case "h6":
      return <h6 className={className}>{children}</h6>;
    case "p":
      return <p className={className}>{children}</p>;
    case "span":
      return <span className={className}>{children}</span>;
    case "div":
      return <div className={className}>{children}</div>;
    default:
      return <span className={className}>{children}</span>;
  }
};
