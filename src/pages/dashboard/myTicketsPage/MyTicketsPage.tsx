import { Text } from "../../../components/text/text";
import { TopBar } from "../../../components/topBar/TopBar";
import { UserTicketCard } from "../../../components/userTicketCard/UserTicketCard";
import { useUserTicketsQuery } from "../../../queries/useUserTicketsQuery";
import { UserTicketsDto } from "../../../services/api/tickets/types";
import styles from "./myTicketsPage.module.scss";

export const MyTicketsPage = () => {
  const { data: tickets } = useUserTicketsQuery();

  if (!tickets) return null;

  const ticketsMap = tickets.reduce<Record<string, UserTicketsDto>>(
    (accumulator, ticket) => {
      const eventName = ticket.type.event.title;

      if (accumulator[eventName]) accumulator[eventName].push(ticket);
      else accumulator[eventName] = [ticket];

      return accumulator;
    },
    {}
  );

  return (
    <div className={styles.page}>
      <TopBar title="My tickets" />
      <div className={styles.ticketsSection}>
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
