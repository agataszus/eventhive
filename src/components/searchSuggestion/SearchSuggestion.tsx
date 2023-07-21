import { Link } from "react-router-dom";
import { ListEventDto } from "../../services/api/event/types";
import { Text } from "../text/text";
import styles from "./searchSuggestion.module.scss";
import { getEventPath } from "../routes/paths";
import { parseEventDate } from "../../helpers/parseEventDate";

type SearchSuggestionProp = {
  event: ListEventDto;
};

export const SearchSuggestion = ({ event }: SearchSuggestionProp) => {
  const { title, externalImageUrls, id, startDate } = event;

  const { day, month, year } = parseEventDate(startDate);
  const date = `${day} ${month} ${year}`;

  return (
    <Link to={getEventPath(id)} className={styles.suggestion}>
      <img src={externalImageUrls[0]} className={styles.img} />
      <div className={styles.description}>
        <Text tag="h4" variant="caption-3" className={styles.title}>
          {title}
        </Text>
        <Text tag="p" variant="subtitle-5" className={styles.date}>
          {date}
        </Text>
      </div>
    </Link>
  );
};
