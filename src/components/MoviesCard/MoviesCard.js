import React from "react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';

function MoviesCard(props) {
    const location = useLocation();

return (
   <article className="movies-card">
        <a className="movies-card__trailer-link" target="_blank" href={props.card.trailerLink} rel="noreferrer" >
                <img className="movies-card__image" src={props.card.image} alt={props.card.nameRU}></img>
        </a>
        <div className="movies-card__description">
            <h2 className="movies-card__title">{props.card.nameRU}</h2>
            {location.pathname === '/movies' ? <button type="button" className="movies-card__like-button button-hover"></button> :
            <button type="button" className='movies-card__delete-button button-hover'></button>}
        </div>
        <p className="movies-card__duration">{props.card.duration}</p>
   </article>
)
}

export default MoviesCard;
