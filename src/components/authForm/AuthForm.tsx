import { forwardRef } from "react";
import { LoginForm } from "../loginForm/LoginForm";
import { NavigationDot } from "../navigationDot/NavigationDot";
import { RegisterForm } from "../registerForm/RegisterForm";
import { SwitchLogin } from "../switchToLogin/SwitchLogin";
import styles from "./authForm.module.scss";

type AuthFormProps = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

export const AuthForm = forwardRef<HTMLDivElement, AuthFormProps>(
  ({ isLogin, setIsLogin }, ref) => {
    return (
      <div className={styles.formNav} ref={ref}>
        <div className={styles.navigation}>
          <NavigationDot
            isActive={!isLogin}
            onClick={() => setIsLogin(false)}
          />
          <NavigationDot isActive={isLogin} onClick={() => setIsLogin(true)} />
        </div>
        <div className={styles.form}>
          <div className={styles.loginView}>
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? (
              <SwitchLogin
                text="Don't have an account?"
                linkText="Sign up here..."
              />
            ) : (
              <SwitchLogin
                text="Already have the account?"
                linkText="Sign in here..."
              />
            )}
          </button>
        </div>
      </div>
    );
  }
);

AuthForm.displayName = "AuthForm";
