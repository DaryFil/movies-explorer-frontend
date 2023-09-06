import React from "react";
import {useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import logoHeader from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import "../Header/Header.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header() {
  const location = useLocation();

  const currentUser = useContext(CurrentUserContext);
  const isAuth = currentUser._id ? true : false;

  return (
    <header
      className={`${
        location.pathname === "/" ? "header_type_landing" : ""
      } header`}
    >
      <div className='header__container'>
        <Link className="header__link link-hover" to="/">
          <img src={logoHeader} alt="Логотип проекта" className="header__logo" />
        </Link>
        {isAuth ? (
          <Navigation />
        ) : (
          <nav className="header__links-container">
            <ul className="header__links">
              <li className="header__link-item"><Link
                to="signup"
                replace
                className="header__link-register link-hover"
              >
                Регистрация
              </Link></li>
              <li className="header__link-item">
                <Link to="signin" replace className="header__link-auth button-hover">Войти</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
