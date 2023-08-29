import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import '../Navigation/Navigation.css';

function Navigation() {
    const location = useLocation();

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function openMenu() {
        setIsMenuOpened(true);
    }

    function closeMenu() {
        setIsMenuOpened(false);
    }

    useEffect(() => { setIsMenuOpened(false) }, [location.pathname])

    return (
        <>
   <nav className={`navigation ${isMenuOpened ? 'navigation_active' : ''}`}>
      <button type="button" className="navigation__button-close button-hover" onClick={closeMenu}></button>
      <div className="navigation__links">
            <Link to="/" className="navigation__link navigation__link_type_main link-hover" replace>Главная</Link>
            <Link to="/movies" className={`navigation__link ${location.pathname === '/movies' ? 'navigation__link_active' : ''} link-hover`} replace >Фильмы</Link>
            <Link to="/saved-movies" replace className={`navigation__link ${location.pathname === '/saved-movies' ? 'navigation__link_active' : ''} link`}>Сохраненные фильмы</Link>
       </div>
      <Link to="/profile" className="navigation__link navigation__link_type_profile link-hover" replace>
                    <div className="navigation__profile">
                        <p className="navigation__link-text">Аккаунт</p>
                        <button type="button" className="navigation__button-profile button-hover"></button>
                    </div>
                </Link>  
   </nav>
   <button type="button" className="navigation__button-nav button-hover" onClick={openMenu}></button>
            <div className={`navigation__overlay ${isMenuOpened ? 'navigation__overlay_active' : ''}`} onClick={closeMenu}></div>
  </>
    )
}

export default Navigation;