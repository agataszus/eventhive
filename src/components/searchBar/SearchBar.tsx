import SearchLineIcon from "remixicon-react/SearchLineIcon";
import styles from "./searchBar.module.scss";
import { SearchSuggestion } from "../searchSuggestion/SearchSuggestion";
import { useEventsQuery } from "../../queries/useEventsQuery";
import { useCallback, useMemo, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Loader } from "../loader/Loader";
import { Text } from "../text/Text";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [areSuggestionsVisible, setAreSuggestionsVisible] = useState(false);
  const { data: events, isLoading, isError, isSuccess } = useEventsQuery();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(() => {
    setAreSuggestionsVisible(false);
  }, [setAreSuggestionsVisible]);

  useOutsideClick(containerRef, handleOutsideClick);

  const searchedEvents = useMemo(() => {
    return events?.filter((event) => {
      const searchText = searchValue.toLowerCase();

      if (
        searchText &&
        (event.title.toLowerCase().includes(searchText) ||
          event.description.toLowerCase().includes(searchText))
      )
        return event;
    });
  }, [searchValue, events]);

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchContainer} ref={containerRef}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          onFocus={() => setAreSuggestionsVisible(true)}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => {
            inputRef.current?.focus();
            setAreSuggestionsVisible(true);
          }}
        >
          <SearchLineIcon className={styles.icon} />
        </button>
      </div>
      {searchValue && areSuggestionsVisible && (
        <ul className={styles.suggestionsContainer}>
          {isLoading && (
            <div className={styles.information}>
              <Loader variant="small" />
            </div>
          )}
          {isError && (
            <div className={styles.information}>
              <Text tag="p" variant="error-1">
                Couldn&apos;t load events. Try again later!
              </Text>
            </div>
          )}
          {!searchedEvents?.length && isSuccess && (
            <div className={styles.information}>
              <Text tag="p" variant="caption-3">
                No events found...
              </Text>
            </div>
          )}
          {searchedEvents?.map((event) => (
            <li key={event.id}>
              <SearchSuggestion event={event} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
