import React from "react";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";

function Register() {
  const [value, setValue] = React.useState("value");
  const inputRef = React.useRef(null);
  const navigate = useNavigate();

  const [Emailvalue, setEmailValue] = React.useState("bob@example.com");
  const onChange = (e) => {
    setEmailValue(e.target.value);
  };

  const [Pasvalue, setPasValue] = React.useState("password");
  const onPasChange = (e) => {
    setPasValue(e.target.value);
  };

  const loginClick = () => {
    navigate("/login")

  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>
        Регистрация
      </h2>
      <form className={styles.form}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
          ref={inputRef}
        />
        <EmailInput
          placeholder="E-mail"
          onChange={onChange}
          value={Emailvalue}
          name={"email"}
          extraClass="mb-2"
        />
        <PasswordInput
          placeholder="Пароль"
          onChange={onPasChange}
          value={Pasvalue}
          name={"password"}
          extraClass="mb-2"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.block + " mt-20"}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
        </p>
        
          <Button htmlType="button" onClick={loginClick} type="secondary" size="small">
            Войти
          </Button>
        
      </div>
    </div>
  );
}

export default Register;
