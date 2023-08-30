import { ReactNode } from "react";
import { Text } from "../text/Text";
import styles from "./accountSection.module.scss";

type AccountSectionProps = {
  title: string;
  children: ReactNode;
};

export const AccountSection = ({ title, children }: AccountSectionProps) => {
  return (
    <div className={styles.section}>
      <Text tag="h3" variant="subtitle-2">
        {title}
      </Text>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
