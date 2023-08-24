import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoHeader from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import "../Header/Header.css";

function Header() {
  const location = useLocation();

  return (
    <header
      className={`${
        location.pathname === "/" ? "header_type_landing" : ""
      } header`}
    >
      <Link className="header__link link-hover" to="/">
        <img src={logoHeader} alt="Логотип проекта" className="header__logo" />
      </Link>
      {location.pathname !== "/" ? (
        <Navigation />
      ) : (
        <div className="header__container">
          <Link
            to="sign-up"
            replace
            className="header__link-register link-hover"
          >
            Регистрация
          </Link>
          <Link to="sign-in" replace>
            <button className="header__link-auth button-hover">Войти</button>
          </Link>
        </div>
      )} 
    </header>
  );
}

export default Header;
