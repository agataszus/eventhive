import { ReactNode } from "react";
import styles from "./text.module.scss";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

type Variant =
  // | "heading-1"
  // | "heading-2"
  // | "heading-3"
  // | "paragraph"
  // | "subtitle"
  "action-1" | "subtitle-1" | "caption-1" | "caption-2";

type TextProps = {
  children: ReactNode;
  tag: Tag;
  variant: Variant;
};

export const Text = ({ children, tag, variant }: TextProps) => {
  const className = styles[variant];

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
