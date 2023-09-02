import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../Profile/Profile.css';
import Header from '../Header/Header.js';

function Profile() {
const [isEditProfile, setIsEditProfile] = useState(false);

function handleEditProfile(evt) {
    evt.preventDefault();
    setIsEditProfile(true);
  };

  return (
    <>
     <Header />
        <main className="profile">
         <section className="profile__container">
           <h1 className="profile__title">Привет, Дарья!</h1>
           <form className="profile__form" name="profile">
              <label className="profile__field">
                 <span className="profile__label">Имя</span>
                   <input
                   className="profile__input"
                   required 
                   minLength="2"
                   maxLength="30" 
                   type="text"
                   placeholder="Имя"
                   name="name"
                   autoComplete="off"
                   value="Дарья"
                   readOnly={!isEditProfile}
                 />
              </label>

              <label className="profile__field">
                 <span className="profile__label">E-mail</span>
                  <input
                      className="profile__input"
                      required
                      type="email"
                      placeholder="Введите E-mail:" readOnly
                      name="email"
                      autoComplete="off"
                      value="test@test.ru"
                   />
              </label>
            
              <div className="profile__container-utils">
                {isEditProfile ? <button type="submit" className="popup__button-submit" disabled>Сохранить</button> : <>
                    <button type="button" className="profile__button-edit button-hover" onClick={handleEditProfile}>Редактировать</button>
                    <Link className="profile__button-exit button-hover" to="/">Выйти из аккаунта</Link>
                </>}
              </div>
           </form>
        </section>
    </main>
 </>
  );
};

export default Profile;

