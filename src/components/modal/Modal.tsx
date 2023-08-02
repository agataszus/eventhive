import { Loader } from "../loader/Loader";
import styles from "./modal.module.scss";
import { Error } from "../error/Error";
import { PropsWithChildren } from "react";
import classNames from "classnames";

type ModalProps = {
  isOpen: boolean;
  setIsOpen?: (newState: boolean) => void;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  variant: "thick" | "narrow";
} & PropsWithChildren;

export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  isLoading,
  isError,
  errorMessage,
  variant,
}: ModalProps) => {
  const modalClassName = classNames(styles.modal, {
    [styles.modalThick]: variant === "thick",
    [styles.modalNarrow]: variant === "narrow",
  });

  const isOverlayVisible = isOpen || isLoading || isError;

  return (
    <>
      {isOverlayVisible && (
        <div
          className={styles.overlay}
          onClick={() => {
            setIsOpen?.(false);
          }}
        />
      )}
      {isLoading && (
        <div className={styles.loader}>
          <Loader variant="large" />
        </div>
      )}
      {(isOpen || isError) && (
        <div className={modalClassName}>
          {isError ? <Error message={errorMessage} /> : children}
        </div>
      )}
    </>
  );
};
