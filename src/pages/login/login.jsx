import React from "react";
import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

function Login() {
  const [value, setValue] = React.useState("bob@example.com");

  const [pasvalue, setPasValue] = React.useState("password");
  const navigate = useNavigate();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChangePas = (e) => {
    setPasValue(e.target.value);
  };
  const registerClick = () => {
    navigate("/register");

  }
  const fogotPasswordClick = () => {
    navigate("/forgot-password")
  }
  return (
    <div className={styles.container}>
      <h2 className={`mb-6 text text_type_main-medium`}>
        Вход
      </h2>

      <form className={styles.form}>
        <EmailInput
          onChange={onChange}
          value={value}
          name={"email"}
          isIcon={false}
        />
        <PasswordInput
          placeholder="Пароль"
          onChange={onChangePas}
          value={pasvalue}
          name={"password"}
          extraClass="mb-2 mt-6 mb-6"
        />

        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
      </form>

      <div className={styles.block + " mt-20"}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>
        
          <Button htmlType="button" onClick={registerClick} type="secondary" size="medium">
            Зарегистрироваться
          </Button>
       
      </div>

      <div className={styles.block}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        
          <Button htmlType="button" onClick={fogotPasswordClick} type="secondary" size="medium">
            Восстановить пароль
          </Button>
        
      </div>
    </div>
  );
}

export default Login;
