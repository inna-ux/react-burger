import React from "react";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import styles from "./reset-password.module.css";

function ResetPassword() {
  const [value, setValue] = React.useState("value");
  const [pasvalue, setPasValue] = React.useState("password");

  const inputRef = React.useRef(null);
  const navigate = useNavigate();

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  const onChangePas = (e) => {
    setPasValue(e.target.value);
  };
  const loginClick = () => {
    navigate("/login")

  }

  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} mb-6 text text_type_main-medium`}>
        Вход
      </h2>

      <form className={styles.form}>
        <PasswordInput
          placeholder="Введите новый пароль"
          value={pasvalue}
          name={"newPassword"}
          onChange={onChangePas}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={"code"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />

        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </form>

      <div className={styles.block}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Button htmlType="button" onClick={loginClick} type="secondary" size="small">
            Войти
          </Button>
      </div>
    </div>
  );
}
export default ResetPassword;
