import React from "react";
import AuthForm from '../AuthForm/AuthForm';


const Register = ({handleSignUp, isLoading }) => {
    return (
      <main>
         <AuthForm 
         title="Добро пожаловать!"
          buttonText="Зарегистрироваться" 
          question="Уже зарегистрированы?"
           linkText="Войти"
            linkUrl='/signup' 
            onSubmit={handleSignUp}
            isLoading={isLoading}
           />
     </main>
    )
}

export default Register;