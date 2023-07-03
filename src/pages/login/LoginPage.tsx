import styles from "./loginPage.module.scss";
import { LoginWelcome } from "../../components/loginWelcome/LoginWelcome";
import { Logo } from "../../components/logo/Logo";
import { AuthForm } from "../../components/authForm/AuthForm";
import { useState } from "react";

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={styles.loginPage}>
      <Logo />
      <div className={styles.loginContent}>
        <div className={styles.welcomeSection}>
          <LoginWelcome handleClick={() => setIsLogin(true)} />
        </div>
        <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  );
};
