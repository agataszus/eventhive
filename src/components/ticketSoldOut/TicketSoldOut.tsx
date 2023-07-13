import styles from "./ticketSoldOut.module.scss";

export const TicketSoldOut = () => {
  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.soldOut}>Sold out</div>
    </>
  );
};
