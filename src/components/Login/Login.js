import React from "react";
import { useEffect } from 'react';
import { Navigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

const Login = ({
   handleSignIn,
    isLoading,
     infoTitle,
     loggedIn,
    // resetError
  }) => {

      // useEffect(() => {
      //   resetError();
      // }, []);
      if(loggedIn) {
        return <Navigate to={'/'}/>
            }
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
