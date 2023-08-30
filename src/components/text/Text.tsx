import { PropsWithChildren } from "react";
import styles from "./text.module.scss";
import classNames from "classnames";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

type Variant =
  | "action-1"
  | "action-2"
  | "action-3"
  | "subtitle-1"
  | "subtitle-2"
  | "subtitle-3"
  | "subtitle-4"
  | "subtitle-5"
  | "caption-1"
  | "caption-2"
  | "caption-3"
  | "caption-4"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading-5"
  | "heading-6"
  | "num-1"
  | "error-1"
  | "success-1";

type TextProps = {
  tag: Tag;
  variant: Variant;
  className?: string;
} & PropsWithChildren;

export const Text = ({ children, tag, variant, className }: TextProps) => {
  const extraClass = classNames(styles[variant], className);

  switch (tag) {
    case "h1":
      return <h1 className={extraClass}>{children}</h1>;
    case "h2":
      return <h2 className={extraClass}>{children}</h2>;
    case "h3":
      return <h3 className={extraClass}>{children}</h3>;
    case "h4":
      return <h4 className={extraClass}>{children}</h4>;
    case "h5":
      return <h5 className={extraClass}>{children}</h5>;
    case "h6":
      return <h6 className={extraClass}>{children}</h6>;
    case "p":
      return <p className={extraClass}>{children}</p>;
    case "span":
      return <span className={extraClass}>{children}</span>;
    case "div":
      return <div className={extraClass}>{children}</div>;
    default:
      return <span className={extraClass}>{children}</span>;
  }
};
