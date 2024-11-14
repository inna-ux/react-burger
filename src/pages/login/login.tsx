import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../services/actions/user/set-user";

function Login() {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  // @ts-ignore
  const loginFailed = useSelector((state) => state.user.loginFailed);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(loginAction(signIn.email, signIn.password));
  };
  const registerClick = () => {
    navigate("/register");
  };
  const fogotPasswordClick = () => {
    navigate("/forgot-password");
  };

  return (
    <div className={styles.container}>
      <h2 className={`mb-6 text text_type_main-medium`}>Вход</h2>

      <form onSubmit={onSubmit} className={styles.form}>
        <EmailInput
          onChange={onChange}
          value={signIn.email}
          name={"email"}
          isIcon={false}
        />
        <PasswordInput
          placeholder="Пароль"
          onChange={onChange}
          value={signIn.password}
          name={"password"}
          extraClass="mb-2 mt-6 mb-6"
        />
        {loginFailed && (
          <p className={`${styles.error} text text_type_main-default mb-2`}>
            Неверный логин или пароль
          </p>
        )}

        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
      </form>

      <div className={styles.block + " mt-20"}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>

        <Button
          htmlType="button"
          onClick={registerClick}
          type="secondary"
          size="medium"
        >
          Зарегистрироваться
        </Button>
      </div>

      <div className={styles.block}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>

        <Button
          htmlType="button"
          onClick={fogotPasswordClick}
          type="secondary"
          size="medium"
        >
          Восстановить пароль
        </Button>
      </div>
    </div>
  );
}

export default Login;
