import React from "react";
import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./app-header.module.css";
import { NavLink, useLocation } from "react-router-dom";

function AppHeader() {
  const location = useLocation();
  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={headerStyles.nav}>
        <ul className={`${headerStyles.nav__list} `}>
          <li className={headerStyles.nav__item}>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "#8585ad",
                };
              }}
              className={`${headerStyles.nav__link}  pl-5 pr-5 pb-4 pt-4  text text_type_main-default  `}
            >
              <BurgerIcon
                type={location.pathname === "/" ? "primary" : "secondary"}
              />
              Конструктор
            </NavLink>
          </li>
          <li className={`${headerStyles.nav_item}`}>
            <NavLink
              to="*"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "#8585ad",
                };
              }}
              className={`${headerStyles.nav__link} pl-5 pr-5 pb-4 pt-4 ml-2 text text_type_main-default text_color_inactive`}
            >
              <ListIcon
                type={location.pathname === "/*" ? "primary" : "secondary"}
              />
              Лента заказов
            </NavLink>
          </li>
        </ul>
        <NavLink to="/" className={headerStyles.logo}>
          <Logo />
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "#8585ad",
            };
          }}
          className={`${headerStyles.nav__link} pl-5 pr-5 pb-4 pt-4 text text_type_main-default text_color_inactive`}
        >
          <ProfileIcon
            type={location.pathname === "/profile" ? "primary" : "secondary"}
          />
          Личный кабинет
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
