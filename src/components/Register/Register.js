import React from "react";
import { useEffect } from 'react';
import { Navigate } from "react-router-dom";
import AuthForm from '../AuthForm/AuthForm';


const Register = ({
  handleSignUp,
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
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        linkText="Войти"
        linkUrl='/signin'
        onSubmit={handleSignUp}
        isLoading={isLoading}
        infoTitle={infoTitle}
      />
    </main>
  )
}

export default Register;
