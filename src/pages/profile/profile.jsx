import React, { useState, useEffect } from "react";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAction } from "../../services/actions/user/set-user";
import updateUserAction from "../../services/actions/user/update-user";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((store) => store.user.user);
  const [current, setCurrent] = useState("profile");
  const [disabled, setDisabled] = useState(true);
  const [userInfoProfile, setUserInfoProfile] = useState({
    name: userInfo.name,
    email: userInfo.email,
    password: "",
  });
  const [activeButtons, setActiveButtons] = useState(false);

  const onChange = (e) => {
    setUserInfoProfile({ ...userInfoProfile, [e.target.name]: e.target.value });
    setActiveButtons(true);
  };

  const onClick = (e) => {
    setCurrent(e.target.name);
  };

  const onSubmit = (e) => {
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
      email: userInfo.email,
      password: "",
      name: userInfo.name,
    });
  };

  const logOut = (e) => {
    setCurrent(e.target.name);
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
  }, [userInfoProfile]);

  return (
    <div className={styles.profilePage}>
      <section className={`${styles.links} mr-15`}>
        <Link
          name="profile"
          to={{ pathname: "/profile" }}
          className={`${styles.link} ${
            current === "profile" ? styles.active : null
          } text text_type_main-medium`}
          onClick={onClick}
        >
          Профиль
        </Link>
        <Link
          name="history"
          to={{ pathname: "/profile/orders" }}
          className={`${styles.link} ${
            current === "history" ? styles.active : null
          } text text_type_main-medium`}
          onClick={onClick}
        >
          История заказов
        </Link>
        <Link
          name="exit"
          className={`${styles.link} ${
            current === "exit" ? styles.active : null
          } text text_type_main-medium`}
          onClick={logOut}
        >
          Выход
        </Link>
        <p className={`${styles.text} text text_type_main-default mt-8`}>
          В этом разделе вы можете изменить свои персональные данные.
        </p>
      </section>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          placeholder="Имя"
          value={userInfoProfile.name}
          name={"name"}
          onChange={onChange}
          icon="EditIcon"
          disabled={disabled}
          onIconClick={() => setDisabled(false)}
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
