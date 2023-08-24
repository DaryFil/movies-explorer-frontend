import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../AuthForm/AuthForm.css';
import logo from '../../images/logo.svg';

function AuthForm(props) {
    const location = useLocation();

    return (
        <section className="auth">
            <div className="auth__container">
                <Link to="/" className="auth__link-logo link-hover"><img src={logo} alt="Логотип проекта" className="auth__logo" /></Link>
                <h2 className="auth__title">{props.title}</h2>
                <form className="auth__form">
                    <div className="auth__form-container">
                        {location.pathname === '/sign-up' ?
                            <div className="auth__field">
                                <label className="auth__label">Имя</label>
                                <input className="auth__input" type="text" minLength="2" maxLength="30" placeholder="Имя"></input>
                                <span className="auth__input-error"></span>
                            </div> : null}
                        <div className="auth__field">
                            <label className="auth__label">e-mail</label>
                            <input className="auth__input" type="email" placeholder="E-mail" required ></input>
                            <span className="auth__input-error"></span>
                        </div>
                        <div className="auth__field">
                            <label className="auth__label">Пароль</label>
                            <input className="auth__input" type="password"  placeholder="Пароль" required></input>
                            <span className="auth__input-error"></span>
                        </div>
                    </div>

                    <div className="auth__form-container">
                        <button className="auth__button button" type="submit">{props.buttonText}</button>
                        <div className="auth__container-link">
                            <p className="auth__link-text">{props.linkDescription}</p>
                            <Link to={props.linkUrl} replace className="auth__link link-hover">{props.linkText}</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AuthForm;