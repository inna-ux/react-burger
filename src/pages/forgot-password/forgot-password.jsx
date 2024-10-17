import React from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from "./forgot-password.module.css";

function ForgotPassword() {
  const [value, setValue] = React.useState("bob@example.com");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} mb-6 text text_type_main-medium`}>
        Восстановление пароля
      </h2>

      <form className={styles.form}>
        <EmailInput
          placeholder="Укажите e-mail"
          onChange={onChange}
          value={value}
          name={"email"}
          isIcon={false}
          extraClass="mb-2 mb-6"
        />

        <Button htmlType="button" type="primary" size="medium">
          Восстановить
        </Button>
      </form>

      <div className={styles.block + " mt-20"}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Link to="/login">
          <Button htmlType="button" type="secondary" size="small">
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
