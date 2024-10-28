import React from "react";
import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={headerStyles.nav}>
        <ul className={`${headerStyles.nav__list} `}>
          <li className={headerStyles.nav__item}>
            <a
              href="/"
              className={`${headerStyles.nav__link} ${headerStyles.white} pl-5 pr-5 pb-4 pt-4  text text_type_main-default `}
            >
              <BurgerIcon type="primary" />
              Конструктор
            </a>
          </li>
          <li className={`${headerStyles.nav_item}`}>
            <a
              href="*"
              className={`${headerStyles.nav__link} pl-5 pr-5 pb-4 pt-4 ml-2 text text_type_main-default text_color_inactive`}
            >
              <ListIcon type="secondary" />
              Лента заказов
            </a>
          </li>
        </ul>
        <div className={headerStyles.logo}>
          <Logo />
        </div>
        <a
          href="/login"
          className={`${headerStyles.nav__link} pl-5 pr-5 pb-4 pt-4 text text_type_main-default text_color_inactive`}
        >
          <ProfileIcon type="secondary" />
          Личный кабинет
        </a>
      </nav>
    </header>
  );
}

export default AppHeader;
