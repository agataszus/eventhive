import { ReactNode } from "react";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type Variant =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "paragraph"
  | "subtitle";

type TextProps = {
  children: ReactNode;
};

// export const Text = ({}) => {
//   return <>{}</>;
// };
