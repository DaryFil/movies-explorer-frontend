import React from "react";
import { useEffect } from 'react';
import AuthForm from "../AuthForm/AuthForm";

const Login = ({
   handleSignIn,
    isLoading,
     infoTitle,
    // resetError
  }) => {

      // useEffect(() => {
      //   resetError();
      // }, []);

  return (
    <main>
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      question="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkUrl="/signup"
      onSubmit={handleSignIn}
			isLoading={isLoading}
      infoTitle={infoTitle}
       />
    </main>
  );
}

export default Login;
