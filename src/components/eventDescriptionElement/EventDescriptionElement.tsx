import { PropsWithChildren } from "react";
import { Text } from "../text/text";
import styles from "./eventDescriptionElement.module.scss";

type EventDescriptionElementProps = {
  category: string;
} & PropsWithChildren;

export const EventDescriptionElement = ({
  category,
  children,
}: EventDescriptionElementProps) => {
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