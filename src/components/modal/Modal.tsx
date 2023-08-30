import { Loader } from "../loader/Loader";
import styles from "./modal.module.scss";
import { Error } from "../error/Error";
import { PropsWithChildren, useEffect, useState } from "react";
import classNames from "classnames";
import { useScrollLock } from "../../hooks/useScrollLock";

type ModalProps = {
  isOpen: boolean;
  closeModal?: () => void;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  variant: "thick" | "narrow";
} & PropsWithChildren;

export const Modal = ({
  children,
  isOpen,
  closeModal,
  isLoading,
  isError,
  errorMessage,
  variant,
}: ModalProps) => {
  const [wasModalOpen, setWasModalOpen] = useState(false);

  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen && !wasModalOpen) setWasModalOpen(true);
  }, [isOpen, wasModalOpen]);

  if (!wasModalOpen) return null;

  const isModalVisible = isOpen || isError;
  const modalClassName = classNames(styles.modal, {
    [styles.modalThick]: variant === "thick",
    [styles.modalNarrow]: variant === "narrow",
    [styles.modalOpen]: isModalVisible,
    [styles.modalClose]: !isModalVisible,
  });

  const isOverlayVisible = isOpen || isLoading || isError;
  const overlayClassName = classNames(styles.overlay, {
    [styles.overlayOpen]: isOverlayVisible,
    [styles.overlayClose]: !isOverlayVisible,
  });

  return (
    <>
      <div
        className={overlayClassName}
        onClick={() => {
          if (closeModal) closeModal();
        }}
      />
      {isLoading && (
        <div className={styles.loader}>
          <Loader variant="large" />
        </div>
      )}
      <div className={modalClassName}>
        {isError ? <Error message={errorMessage} /> : children}
      </div>
    </>
  );
};
