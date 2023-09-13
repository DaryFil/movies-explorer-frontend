
import  CurrentUserContext   from "../../contexts/CurrentUserContext";
import useFormValidation from "../../hooks/useFormValidation";
import React from "react";
import { useState,  useContext, useEffect } from 'react';
import Header from '../Header/Header.js';
import { EMAIL_REGEX, NAME_REGEX } from '../../utils/constants';
import '../Profile/Profile.css';

function Profile({
   signOut,
    loggedIn,
     handleUserUpdate,
     infoTitle, 
     setInfoTitle,
    // resetError
  }) {
   const currentUser = useContext(CurrentUserContext);

   // режим изменения формы и кнопок
   const [isEdit, setIsEdit] = useState(false);

   const {
    inputValues, handleChange, setInputValues, isValid, errors,
  } = useFormValidation({
    name: '',
    email: '',
  });

  const handleEditButton = () => {
    setIsEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      handleUserUpdate({
        name: inputValues.name ,
        email: inputValues.email,
      });
      setIsEdit(false);
    }
  };
   // актуальные данные при открытии
   useEffect(() => {
    setInputValues({
      name: currentUser.name ?? '',
      email: currentUser.email ?? '',
    });
  }, [currentUser, setInputValues]);

  useEffect(() => {
  return () => {
    setInfoTitle('');
  }
  }, []);

  // useEffect(() => {
  //   resetError();
  // }, []);
  
console.log(infoTitle);
  const isChanged = inputValues.name !== currentUser.name || inputValues.email !== currentUser.email;
  const buttonEnabled = !(isValid === isChanged);
 return (
    <>
     <Header loggedIn={loggedIn} />
        <main className="profile">
         <section className="profile__container">
           <h1 className="profile__title">Привет, {currentUser.name}! </h1>
           <form className="profile__form" name="profile" >
              <label className="profile__field">
                 <span className="profile__label">Имя</span>
                 <input className={`profile__input ${isEdit ? 'profile__input_active' : ''}`}
                   required 
                   minLength="2"
                   maxLength="30" 
                   type="text"
                   placeholder="Имя"
                   name="name"
                   autoComplete="off"
                   value={inputValues.name}
                  onChange={handleChange}
                  pattern={NAME_REGEX}
                  disabled={!isEdit}
                 />
         <span
          className={`auth__input-error ${
            errors.name && "auth__input-error_active"
          }`}
        >
          {errors.name || ""}
        </span>
              </label>

              <label className="profile__field">
                 <span className="profile__label">E-mail</span>
                  <input
                  className={`profile__input ${isEdit ? 'profile__input_active' : ''}`}
                      required
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      autoComplete="off"
                      value={inputValues.email}
                      onChange={handleChange}
                      disabled={!isEdit}
                      pattern={EMAIL_REGEX}
                   />
         <span
          className={`auth__input-error auth__input-error_email ${
            errors.email && "auth__input-error_active"
          }`}
        >
          {errors.email || ""}
        </span>
              </label>
            {infoTitle}
          <div className="profile__container-utils">
          {isEdit ? 
          <button
          type="button" 
          onClick={handleSubmit}
          className="popup__button-submit"
          //  disabled={!isValid}
           disabled={buttonEnabled}
           >
          Сохранить
          </button>
          : <>
             
                  <button
                     type="button" 
                     className="profile__button-edit button-hover"
                    onClick={handleEditButton}
                    >
                      Редактировать
                      </button>
                    <button 
                     type="button"
                    className="profile__button-exit button-hover"
                     onClick={signOut}
                     >
                      Выйти из аккаунта
                     </button>
                </>}
              </div>
           </form>
        </section>
    </main>
 </>
  );
};

export default Profile;

