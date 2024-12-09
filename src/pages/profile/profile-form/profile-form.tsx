import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-form.module.css";
import { useSelector, useDispatch } from "../../../utils/types/hook";
import updateUserAction from "../../../services/actions/user/update-user";

function ProfileForm() {
  const dispatch = useDispatch();

  const userInfo = useSelector((store) => store.user.user);

  const [disabled, setDisabled] = useState(true);
  const [userInfoProfile, setUserInfoProfile] = useState({
    name: userInfo?.name,
    email: userInfo?.email,
    password: "",
  });
  const [activeButtons, setActiveButtons] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfoProfile({ ...userInfoProfile, [e.target.name]: e.target.value });
    setActiveButtons(true);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      updateUserAction(
        userInfoProfile.name,
        userInfoProfile.email,
        userInfoProfile.password
      )
    );
  };

  const cancelChanges = () => {
    setUserInfoProfile({
      email: userInfo?.email,
      password: "",
      name: userInfo?.name,
    });
  };

  useEffect(() => {
    if (
      (userInfoProfile.name === userInfo?.name &&
        userInfoProfile.email === userInfo?.email &&
        userInfoProfile.password === "") ||
      !userInfoProfile.name ||
      !userInfoProfile.email
    ) {
      setActiveButtons(false);
    }
  }, [userInfo?.email, userInfo?.name, userInfoProfile]);

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input
        type={"text"}
        placeholder="Имя"
        value={userInfoProfile.name ?? ""}
        name={"name"}
        onChange={onChange}
        icon="EditIcon"
        disabled={disabled}
        onIconClick={() => setDisabled(false)}
        error={false}
        errorText={"Ошибка"}
      />

      <EmailInput
        placeholder="Логин"
        value={userInfoProfile.email ?? ""}
        name={"email"}
        onChange={onChange}
        isIcon={true}
      />
      <PasswordInput
        placeholder="Пароль"
        value={userInfoProfile.password}
        name={"password"}
        onChange={onChange}
        icon="EditIcon"
      />
      {activeButtons && (
        <div style={{ display: "flex" }}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={cancelChanges}
          >
            Отменить
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}

export default ProfileForm;
