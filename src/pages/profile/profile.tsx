import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAction } from "../../services/actions/user/set-user";
import updateUserAction from "../../services/actions/user/update-user";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // @ts-ignore
  const userInfo = useSelector((store) => store.user.user);

  const [disabled, setDisabled] = useState(true);
  const [userInfoProfile, setUserInfoProfile] = useState({
    name: userInfo.name,
    email: userInfo.email,
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
      // @ts-ignore
      updateUserAction(
        userInfoProfile.name,
        userInfoProfile.email,
        userInfoProfile.password
      )
    );
  };

  const cancelChanges = () => {
    setUserInfoProfile({
      email: userInfo.email,
      password: "",
      name: userInfo.name,
    });
  };

  const logOut = () => {
    // @ts-ignore
    dispatch(logoutUserAction(() => navigate("/login")));
  };

  useEffect(() => {
    if (
      (userInfoProfile.name === userInfo.name &&
        userInfoProfile.email === userInfo.email &&
        userInfoProfile.password === "") ||
      !userInfoProfile.name ||
      !userInfoProfile.email
    ) {
      setActiveButtons(false);
    }
  }, [userInfo.email, userInfo.name, userInfoProfile]);

  return (
    <div className={styles.profilePage}>
      <section className={`${styles.links} mr-15`}>
        <NavLink
          end
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active} text text_type_main-medium`
              : `${styles.link} text text_type_main-medium`
          }
        >
          Профиль
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active} text text_type_main-medium`
              : `${styles.link} text text_type_main-medium`
          }
        >
          История заказов
        </NavLink>
        <NavLink
          to="/login"
          className={`${styles.link} text text_type_main-medium`}
          onClick={logOut}
        >
          Выход
        </NavLink>
        <p className={`${styles.text} text text_type_main-default mt-8`}>
          В этом разделе вы можете изменить свои персональные данные.
        </p>
      </section>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          type={"text"}
          placeholder="Имя"
          value={userInfoProfile.name}
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
          value={userInfoProfile.email}
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
    </div>
  );
}

export default Profile;
