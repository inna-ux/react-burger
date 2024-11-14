import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate, Navigate } from "react-router-dom";
import styles from "./reset-password.module.css";
import { resetPassword } from "../../utils/api";

function ResetPassword() {
  const [values, setValues] = useState({
    newPassword: "",
    code: "",
  });

  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

 

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const loginClick = () => {
    navigate("/login");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPassword(values.newPassword, values.code).then(() => {
      localStorage.removeItem("passwordReset");
      navigate("/login");
    });
  };

  if (!localStorage.getItem("passwordReset")) {
    return <Navigate to="/forgot-password" />;
  }

  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} mb-6 text text_type_main-medium`}>
        Вход
      </h2>

      <form onSubmit={onSubmit} className={styles.form}>
        <PasswordInput
          placeholder="Введите новый пароль"
          value={values.newPassword ?? ""}
          name={"newPassword"}
          onChange={onChange}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChange}
          value={values.code ?? ""}
          name={"code"}
          error={false}
          disabled={disabled}
          onIconClick={() => setDisabled(false)}
          icon="EditIcon"

          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
          //  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}   
                />

        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </form>

      <div className={styles.block}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
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
export default ResetPassword;
