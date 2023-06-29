import { useState } from "react";
import { NavigationDot } from "../../components/navigationDot/NavigationDot";
import { RegisterForm } from "../../components/registerForm/RegisterForm";
import styles from "./loginPage.module.scss";
import { LoginForm } from "../../components/loginForm/LoginForm";
import { LoginWelcome } from "../../components/loginWelcome/LoginWelcome";
import { Logo } from "../../components/logo/Logo";

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={styles.loginPage}>
      <Logo />
      <div className={styles.loginContent}>
        <div className={styles.welcomeSection}>
          <LoginWelcome />
        </div>
        <div className={styles.formNav}>
          <div className={styles.navigation}>
            <NavigationDot
              isActive={!isLogin}
              onClick={() => {
                setIsLogin(false);
              }}
            />
            <NavigationDot
              isActive={isLogin}
              onClick={() => setIsLogin(true)}
            />
          </div>
          <div className={styles.loginView}>
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
};
