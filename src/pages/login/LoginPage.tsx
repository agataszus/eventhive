import { LoginForm } from "../../components/loginForm/LoginForm";
import styles from "./loginPage.module.scss";

export const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.aside}></div>
      <div className={styles.loginView}>
        <h2>Login</h2>
        <h3>Login to your account</h3>
        <p>
          Welcome back to Socialife! Please provide your credentials to login
          into your account. If you don&apos;t have the account register here.
        </p>
        <LoginForm />
      </div>
    </div>
  );
};
