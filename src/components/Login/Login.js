import React from "react";
import AuthForm from "../AuthForm/AuthForm";

const Login = ({ handleSignIn, isLoading}) => {
  return (
    <main>
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      question="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkUrl="/signin"
      onSubmit={handleSignIn}
			isLoading={isLoading}
    />
    </main>
  );
}

export default Login;
