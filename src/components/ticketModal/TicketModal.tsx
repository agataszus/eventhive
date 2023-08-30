import { parseEventDate } from "../../helpers/parseEventDate";
import { useTicketQuery } from "../../queries/useTicketQuery";
import { Modal } from "../modal/Modal";
import { Text } from "../text/text";
import { TicketQRCode } from "../ticketQRCode/TicketQRCode";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import styles from "./ticketModal.module.scss";

type TicketModalProps = {
  isOpen: boolean;
  ticketId: number;
  setIsOpen: (newState: boolean) => void;
};

export const TicketModal = ({
  isOpen,
  ticketId,
  setIsOpen,
}: TicketModalProps) => {
  const { data: ticket, isLoading, isError } = useTicketQuery(ticketId);

  if (!ticket) return null;

  const {
    type: {
      event: { title, startDate, endDate },
      title: ticketTitle,
    },
  } = ticket;

  const startingDate = parseEventDate(startDate);
  const { day: startDay, month: startMonth, year: startYear } = startingDate;

  const endingDate = parseEventDate(endDate);
  const { day: endDay, month: endMonth, year: endYear } = endingDate;

  const fullDateString = `${startDay} ${startMonth} ${startYear}${
    endDate ? ` - ${endDay} ${endMonth} ${endYear}` : ""
  }`;

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => setIsOpen(false)}
      isLoading={isLoading}
      isError={isError}
      errorMessage="Couldn't load ticket details. Try again later!"
      variant="narrow"
    >
      <div className={styles.content}>
        <CloseLineIcon
          className={styles.closeIcon}
          onClick={() => setIsOpen(false)}
        />
        <TicketQRCode variant="large" id={ticketId} />
        <div className={styles.description}>
          <Text tag="h3" variant="heading-5" className={styles.title}>
            {title}
          </Text>
          <Text tag="h4" variant="subtitle-2" className={styles.ticketTitle}>
            {ticketTitle}
          </Text>
          <Text tag="p" variant="subtitle-5" className={styles.date}>
            {fullDateString}
          </Text>
        </div>
      </div>
    </Modal>
  );
};
