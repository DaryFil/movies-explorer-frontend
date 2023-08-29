import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return (
    <main>
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      linkDescription="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkUrl="/signup"
    />
    </main>
  );
}

export default Login;
