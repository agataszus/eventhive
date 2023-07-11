import { useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import { ProfileForm } from "../profileForm/ProfileForm";
import { useAccountQuery } from "../../queries/useAccountQuery";

export const CreateProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError, isSuccess } = useAccountQuery();

  useEffect(() => {
    if (isSuccess) {
      const { profile } = data ?? {};
      setIsOpen(!profile);
    }
  }, [data, isSuccess]);

  return (
    <Modal isOpen={isOpen} isLoading={isLoading} isError={isError}>
      <ProfileForm />
    </Modal>
  );
};
