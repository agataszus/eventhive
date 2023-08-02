import { useEffect, useState } from "react";
import { Text } from "../../../components/text/text";
import { TopBar } from "../../../components/topBar/TopBar";
import { UserTicketCard } from "../../../components/userTicketCard/UserTicketCard";
import { useTopbarVisibleCheck } from "../../../hooks/useTopbarVisibleCheck";
import { useUserTicketsQuery } from "../../../queries/useUserTicketsQuery";
import { UserTicketsDto } from "../../../services/api/tickets/types";
import styles from "./myTicketsPage.module.scss";
import { Error } from "../../../components/error/Error";

export const MyTicketsPage = () => {
  const { data: tickets } = useUserTicketsQuery();

  const isTopbar = useTopbarVisibleCheck();
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    setIsTopbarVisible(isTopbar);
  }, [isTopbar]);

  // if (!tickets) return null;

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
