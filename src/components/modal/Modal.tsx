import { Loader } from "../loader/Loader";
import styles from "./modal.module.scss";
import { Error } from "../error/Error";
import { PropsWithChildren } from "react";

type ModalProps = {
  isOpen: boolean;
  isLoading: boolean;
  isError: boolean;
} & PropsWithChildren;

export const Modal = ({ children, isOpen, isLoading, isError }: ModalProps) => {
  return (
    <>
      {(isOpen || isLoading || isError) && <div className={styles.overlay} />}
      {isLoading && (
        <div className={styles.loader}>
          <Loader variant="large" />
        </div>
      )}
      {(isOpen || isError) && (
        <div className={styles.modal}>
          {isError ? (
            <Error message="Could not load the profile form." />
          ) : (
            children
          )}
        </div>
      )}
    </>
  );
};
