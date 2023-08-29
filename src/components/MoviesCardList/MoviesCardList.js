import React from "react";
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

function MoviesCardList() {
    const location = useLocation();

    const cardList = [
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        }, 
         {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://w.forfun.com/fetch/e9/e9b7c17396649c44bcc9b0a646496435.jpeg',
            trailerLink: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
            duration: 120
        },
    ];


return (
    <section className="movies-card-list">
        <ul className="movies-card-list__container">
            {cardList.map((card, i) => { return < MoviesCard card={card} key={i} /> })}
        </ul >

        {location.pathname === '/movies' ? <button className="movies-card-list__button button-hover" type="button">Ещё</button> : null}
        </section>
    )
}

export default MoviesCardList;    
