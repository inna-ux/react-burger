import React from "react";
import styles from "./profile.module.css";
import { NavLink, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useDispatch } from "../../utils/types/hook";
import { logoutUserAction } from "../../services/actions/user/set-user";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    dispatch(logoutUserAction(() => navigate("/login")));
  };

  const descriptionPage =
    location.pathname === "/profile" ? (
      <p className={`${styles.text} text text_type_main-default mt-8`}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
    ) : (
      <p className={`${styles.text} text text_type_main-default mt-8`}>
        В этом разделе вы можете просмотреть свою историю заказов
      </p>
    );
  return (
    <div className={styles.profilePage}>
      <section className={`${styles.links} mt-30 mb-20 mr-15`}>
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
        {descriptionPage}
      </section>

      <Outlet />
    </div>
  );
}

export default Profile;
