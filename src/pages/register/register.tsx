import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import { useDispatch } from "../../utils/types/hook";
import userAction from "../../services/actions/user/create-user";

function Register() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userAction(userInfo.email, userInfo.password, userInfo.name));
  };

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChange}
          value={userInfo.name}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
        <EmailInput
          placeholder="E-mail"
          onChange={onChange}
          value={userInfo.email}
          name={"email"}
          extraClass="mb-2"
          data-cy="email_input"
        />
        <PasswordInput
          placeholder="Пароль"
          onChange={onChange}
          value={userInfo.password}
          name={"password"}
          extraClass="mb-2"
          data-cy="password_input"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.block + " mt-20"}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
        </p>

        <Button
          htmlType="button"
          onClick={loginClick}
          type="secondary"
          size="small"
        >
          Войти
        </Button>
      </div>
    </div>
  );
}

export default Register;
