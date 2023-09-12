import React from "react";
import { useEffect } from 'react';
import AuthForm from '../AuthForm/AuthForm';


const Register = ({
  handleSignUp,
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
