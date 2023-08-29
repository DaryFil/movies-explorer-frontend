import React from "react";
import AuthForm from '../AuthForm/AuthForm';

function Register() {
    return (
      <main>
         <AuthForm title="Добро пожаловать!" buttonText="Зарегистрироваться" linkDescription="Уже зарегистрированы?" linkText="Войти" linkUrl='/signin' />
     </main>
    )
}

export default Register;