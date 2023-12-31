import { useEffect, useState } from "react";
import { Text } from "../../../components/text/Text";
import { TopBar } from "../../../components/topBar/TopBar";
import { UserTicketCard } from "../../../components/userTicketCard/UserTicketCard";
import { useTopbarVisibleCheck } from "../../../hooks/useTopbarVisibleCheck";
import { useUserTicketsQuery } from "../../../queries/useUserTicketsQuery";
import { UserTicketsDto } from "../../../services/api/tickets/types";
import styles from "./myTicketsPage.module.scss";
import { Error } from "../../../components/error/Error";
import { Loader } from "../../../components/loader/Loader";

export const MyTicketsPage = () => {
  const { data: tickets, isLoading, isError } = useUserTicketsQuery();

  const isTopbar = useTopbarVisibleCheck();
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    setIsTopbarVisible(isTopbar);
  }, [isTopbar]);

  const ticketsMap =
    tickets?.reduce<Record<string, UserTicketsDto>>((accumulator, ticket) => {
      const eventName = ticket.type.event.title;

      if (accumulator[eventName]) accumulator[eventName].push(ticket);
      else accumulator[eventName] = [ticket];

      return accumulator;
    }, {}) || {};

  return (
    <div className={styles.page}>
      {isTopbarVisible && <TopBar title="My tickets" />}
      {isLoading && (
        <div className={styles.message}>
          <Loader variant="large" />
        </div>
      )}
      {isError && (
        <div className={styles.message}>
          <Error message="Couldn't load tickets! Try again later!" />
        </div>
      )}
      <div className={styles.ticketsSection}>
        {tickets?.length === 0 && (
          <div className={styles.message}>
            <Error message="You don't have any tickets yet!" />
          </div>
        )}
        {Object.entries(ticketsMap).map(([title, tickets]) => (
          <div key={title} className={styles.eventSection}>
            <Text tag="h2" variant="heading-6">
              {title}
            </Text>
            <div className={styles.EventTickets}>
              {tickets?.map((ticket) => (
                <UserTicketCard ticket={ticket} key={ticket.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
