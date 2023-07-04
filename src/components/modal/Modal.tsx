import styles from "./modal.module.scss";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export const Modal = ({ children, isOpen }: ModalProps) => {
  return (
    <>
      <div
        className={styles.overlay}
        style={isOpen ? undefined : { display: "none" }}
      ></div>
      <div
        className={styles.modal}
        style={isOpen ? undefined : { display: "none" }}
      >
        {children}
      </div>
    </>
  );
};
