import React from "react";
import {useState} from 'react';
import {useMemo} from "react";
import {useLocation} from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';


const MoviesCard = ({
                      card,
                      savedMovies,
                      saveMovie,
                      deleteMovie
                    }) => {
  const {pathname} = useLocation();

  const convertedTime = (length) => {
    if (length >= 60) {
      return `${Math.floor(length / 60)}ч ${length % 60}м`;
    }
    return `${length}м`;
  };

  const isLiked = useMemo(() => {
    return savedMovies.some((m) => m.movieId === card.id);
  }, [card, savedMovies]);

  function handleToggleLikeMovie() {
    isLiked ? deleteMovie(card) : saveMovie(card);
  }

  function handleDeleteMovie() {
    return deleteMovie(card);
  }

  const imgUrl = pathname === '/movies'
    ? `https://api.nomoreparties.co/${card.image.url}`
    : card.image

  const changeImageLike = () => {
    if (!isLiked) {
      return ('movies-card__like-button')
    } else {
      return ('movies-card__like-button_active')
    }

  }
  return (
    <article className="movies-card">
      <a className="movies-card__trailer-link" target="_blank" href={card.trailerLink} rel="noreferrer">
        <img className="movies-card__image" src={imgUrl}
             alt={card.nameRU}></img>
      </a>
      <div className="movies-card__description">
        <h2 className="movies-card__title">{card.nameRU || card.nameEN}</h2>
        {pathname === '/movies'
          ? <button type="button"
            //  className="movies-card__like-button button-hover"
                    className={`${changeImageLike()} button-hover `}
                    onClick={handleToggleLikeMovie}
          />
          : <button
            type="button"
            className='movies-card__delete-button button-hover'
            onClick={handleDeleteMovie}
          />}
      </div>
      <p className="movies-card__duration">{convertedTime(card.duration)}</p>
    </article>
  )
}

export default MoviesCard;
