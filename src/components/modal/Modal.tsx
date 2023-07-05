import { Loader } from "../loader/Loader";
import styles from "./modal.module.scss";
import { Error } from "../error/Error";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  isLoading: boolean;
  isError: boolean;
};

export const Modal = ({ children, isOpen, isLoading, isError }: ModalProps) => {
  return (
    <>
      <div
        className={styles.overlay}
        style={isOpen || isLoading || isError ? undefined : { display: "none" }}
      ></div>
      {isLoading && (
        <div className={styles.loader}>
          <Loader variant="large" />
        </div>
      )}
      <div
        className={styles.modal}
        style={isOpen || isError ? undefined : { display: "none" }}
      >
        {isError ? (
          <Error message="Could not load the profile form." />
        ) : (
          children
        )}
      </div>
    </>
  );
};
