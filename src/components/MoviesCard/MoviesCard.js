import React from "react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';

function MoviesCard(props) {
    const location = useLocation();

    const [isActiveRemoveClass, setIsActiveRemoveClass] = useState('movies-card__delete-button button-hover')

    const handleMouseEnter = (e) => {
        setIsActiveRemoveClass('movies-card__delete-button movies-card__delete-button_active button-hover')
    }

    const handleMouseLeave = (e) => {
        setIsActiveRemoveClass('movies-card__delete-button button-hover')
    }

return (
   <article className="movies-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a className="movies-card__trailer-link" target="_blank" href={props.card.trailerLink} >
                <img className="movies-card__image" src={props.card.image} alt={props.card.nameRU}></img>
        </a>
        <div className="movies-card__description">
            <h2 className="movies-card__title">{props.card.nameRU}</h2>
            {location.pathname === '/movies' ? <button type="button" className="movies-card__like-button button-hover"></button> :
            <button type="button" className={isActiveRemoveClass}></button>}
        </div>
        <p className="movies-card__duration">{props.card.duration}</p>
   </article> 
)
}  

export default MoviesCard;