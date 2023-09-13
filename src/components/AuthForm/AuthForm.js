import React from "react";
import {useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import "../AuthForm/AuthForm.css";
import logo from "../../images/logo.svg";
import {EMAIL_REGEX, NAME_REGEX} from '../../utils/constants';

const AuthForm = ({
                    title,
                    buttonText,
                    question,
                    onSubmit,
                    linkUrl,
                    linkText,
                    loggedIn,
                    isLoading,
                    infoTitle,
                    resetError
                  }) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const {inputValues, handleChange, errors, isValid, resetForm} =
    useFormValidation({name: '', email: '', password: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(inputValues);
    }
  };

  useEffect(() => {
    if (loggedIn) resetForm();
  }, [loggedIn, resetForm]);

  useEffect(() => {
    if (loggedIn) {
      navigate("/movies", {replace: true});
    }
  }, [navigate, loggedIn]);

  


  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/" className="auth__link-logo link-hover">
          <img src={logo} alt="Логотип проекта" className="auth__logo"/>
        </Link>
        <h1 className="auth__title">{title}</h1>
        <form
          className="auth__form" noValidate
          onSubmit={handleSubmit}>
          <div className="auth__form-container">
            {pathname === "/signup" ? (
              <div className="auth__field">
                <label className="auth__label">Имя</label>
                <input
                  className={`auth__input ${
                    isLoading ? "auth__input_disabled" : ""
                  }`}
                  type="text"
                  name="name"
                  placeholder="Имя"
                  required
                  minLength="2"
                  maxLength="30"
                  value={inputValues.name || ""}
                  onChange={handleChange}
                  pattern={NAME_REGEX}
                />
                <span
                  className={`auth__input-error ${
                    errors.name && "auth__input-error_active"
                  }`}
                >
              {errors.name || ""}
            </span>
              </div>
            ) : null}
            <div className="auth__field">
              <label className="auth__label">e-mail</label>
              <input
                className={`auth__input ${isLoading ? "auth__input_disabled" : ""}`}
                type="email"
                name="email"
                placeholder="E-mail"
                required
                minLength="4"
                maxLength="40"
                value={inputValues.email || ""}
                onChange={handleChange}
                pattern={EMAIL_REGEX}
              />
              <span
                className={`auth__input-error ${
                  errors.email && "auth__input-error_active"
                }`}
              >
          {errors.email || ""}
        </span>
            </div>
            <div className="auth__field">
              <label className="auth__label">Пароль</label>
              <input
                className={`auth__input ${isLoading ? "auth__input_disabled" : ""}`}
                type="password"
                name="password"
                placeholder="Пароль"
                required
                minLength="8"
                maxLength="30"
                value={inputValues.password || ""}
                onChange={handleChange}
              ></input>
              <span
                className={`auth__input-error ${
                  errors.password && "auth__input-error_active"
                }`}
              >
          {errors.password || ""}
        </span>
            </div>
          </div>

          <div className="auth__buttons">
            {infoTitle}

            <button className="auth__button button-hover"
                type="submit"
                disabled={!isValid}>
              {buttonText}
            </button>
            <div className="auth__container-link">
              <p className="auth__link-text">{question}</p>
              <Link
                to={linkUrl}
                // replace
                className="auth__link link-hover"
              >
                {linkText}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
