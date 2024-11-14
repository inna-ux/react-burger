import React, { ChangeEvent, FormEvent } from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./forgot-password.module.css";
import { forgotPassword } from "../../utils/api";

function ForgotPassword() {
  const [email, setEmail] = React.useState(" ");
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const loginClick = () => {
    navigate("/login");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      forgotPassword(email).then(() => {
        localStorage.setItem("passwordReset", "true");
        navigate("/reset-password", { state: { prevName: location.pathname } });
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} mb-6 text text_type_main-medium`}>
        Восстановление пароля
      </h2>

      <form onSubmit={onSubmit} className={styles.form}>
        <EmailInput
          placeholder="Укажите e-mail"
          onChange={onChange}
          value={email}
          name={"email"}
          isIcon={false}
          extraClass="mb-2 mb-6"
        />

        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
        </Button>
      </form>

      <div className={styles.block + " mt-20"}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>

        <Button
          onClick={loginClick}
          htmlType="button"
          type="secondary"
          size="small"
        >
          Войти
        </Button>
      </div>
    </div>
  );
}

export default ForgotPassword;
