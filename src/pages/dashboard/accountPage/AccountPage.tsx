import { AccountSection } from "../../../components/accountSection/AccountSection";
import { ChangePasswordForm } from "../../../components/changePasswordForm/ChangePasswordForm";
import { PersonalInformation } from "../../../components/personalInformation/PersonalInformation";
import { TopBar } from "../../../components/topBar/TopBar";
import { UpdateProfileForm } from "../../../components/updateProfileForm/UpdateProfileForm";
import styles from "./accountPage.module.scss";

export const AccountPage = () => {
  return (
    <div className={styles.page}>
      <TopBar title="My Account" />
      <div className={styles.sections}>
        <AccountSection title="Personal Information">
          <PersonalInformation />
        </AccountSection>
        <AccountSection title="Update Account">
          <UpdateProfileForm />
        </AccountSection>
        <AccountSection title="Change password">
          <ChangePasswordForm />
        </AccountSection>
      </div>
    </div>
  );
};
