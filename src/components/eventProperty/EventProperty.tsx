import { PropsWithChildren } from "react";
import { Text } from "../text/text";
import styles from "./eventProperty.module.scss";

type EventPropertyProps = {
  category: string;
} & PropsWithChildren;

export const EventProperty = ({ category, children }: EventPropertyProps) => {
  return (
    <li className={styles.descriptionContainer}>
      <Text tag="p" variant="subtitle-4" className={styles.category}>
        {category} -
      </Text>
      <Text tag="p" variant="caption-3">
        {children}
      </Text>
    </li>
  );
};
