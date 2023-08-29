import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../AuthForm/AuthForm.css";
import logo from "../../images/logo.svg";

function AuthForm(props) {
  const location = useLocation();

  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/" className="auth__link-logo link-hover">
          <img src={logo} alt="Логотип проекта" className="auth__logo" />
        </Link>
        <h1 className="auth__title">{props.title}</h1>
        <form className="auth__form">
          <div className="auth__form-container">
            {location.pathname === "/signup" ? (
              <div className="auth__field">
                <label className="auth__label">Имя</label>
                <input
                  className="auth__input"
                  type="text"
                  minLength="2"
                  maxLength="30"
                  placeholder="Имя"
                  required
                ></input>
                <span className="auth__input-error"></span>
              </div>
            ) : null}
            <div className="auth__field">
              <label className="auth__label">e-mail</label>
              <input
                className="auth__input"
                type="email"
                placeholder="E-mail"
                minLength="4"
                maxLength="40"
                required
              ></input>
              <span className="auth__input-error"></span>
            </div>
            <div className="auth__field">
              <label className="auth__label">Пароль</label>
              <input
                className="auth__input"
                type="password"
                placeholder="Пароль"
                minLength="8"
                maxLength="30"
                required
              ></input>
              <span className="auth__input-error"></span>
            </div>
          </div>

          <div className="auth__buttons">
            <button className="auth__button button-hover" type="submit">
              {props.buttonText}
            </button>
            <div className="auth__container-link">
              <p className="auth__link-text">{props.linkDescription}</p>
              <Link
                to={props.linkUrl}
                replace
                className="auth__link link-hover"
              >
                {props.linkText}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
