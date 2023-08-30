import styles from "./loginPage.module.scss";
import { LoginWelcome } from "../../components/loginWelcome/LoginWelcome";
import { Logo } from "../../components/logo/Logo";
import { AuthForm } from "../../components/authForm/AuthForm";
import { useRef, useState } from "react";

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const authFormRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.loginPage}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.loginContent}>
        <div className={styles.welcomeSection}>
          <LoginWelcome
            handleClick={() => {
              setIsLogin(true);
              authFormRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
        <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} ref={authFormRef} />
      </div>
    </div>
  );
};
