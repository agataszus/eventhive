import { Text } from "../text/text";
import ErrorWarningLineIcon from "remixicon-react/ErrorWarningLineIcon";

import styles from "./error.module.scss";

type ErrorProps = {
  message: string;
};

export const Error = ({ message }: ErrorProps) => {
  return (
    <div className={styles.errorContainer}>
      <ErrorWarningLineIcon className={styles.errorIcon} />
      <Text tag="div" variant="action-2">
        {message}
      </Text>
    </div>
  );
};
