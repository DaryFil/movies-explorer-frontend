import React, {useMemo, useRef} from "react";
import {useEffect, useState, useCallback} from "react";
import {useLocation} from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import {
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  CARDS_DESKTOP_QUANTITY,
  CARDS_TABLET_QUANTITY,
  CARDS_MOBILE_QUANTITY,
  CARDS_MORE_DESKTOP,
  CARDS_MORE_MOBILE, MOBILE_WIDTH,
} from '../../utils/constants';

const MoviesCardList = ({
                          movies,
                          saveMovie,
                          savedMovies,
                          deleteMovie,
                          isLoading,
                          showAllMovies,
                          searchMessage,
                        }) => {
  const {pathname} = useLocation();

  const [paginate, setPaginate] = useState(0);
  const [paginateButton, setPaginateButton] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const areMoreLoaded = useRef(false)


  useEffect(() => {
    changePaginate();
  }, []);

  useEffect(() => {
    if (showAllMovies) {
      setPaginateButton(false)
      return
    }
    if (movies.length === 0) {
      setPaginateButton(false);
      return
    }
    if (paginate >= movies.length) {
      setPaginateButton(false);
    } else {
      setPaginateButton(true);
    }
  }, [movies, paginate, showAllMovies]);


  function changePaginate() {
    if (showAllMovies) {
      return;
    }
    if (areMoreLoaded.current) {
      return;
    }
    if (window.innerWidth >= DESKTOP_WIDTH) {
      setPaginate(CARDS_DESKTOP_QUANTITY);
      return;
    } else if (
      window.innerWidth < DESKTOP_WIDTH &&
      window.innerWidth >= TABLET_WIDTH
    ) {
      setPaginate(CARDS_TABLET_QUANTITY);
      return
    }
    if (window.innerWidth > MOBILE_WIDTH) {
      setPaginate(CARDS_MOBILE_QUANTITY);
      return
    }
  }

  function handlePaginate() {
    areMoreLoaded.current = true
    if (window.innerWidth >= DESKTOP_WIDTH)
      return setPaginate(paginate + CARDS_MORE_DESKTOP);
    else if (window.innerWidth < DESKTOP_WIDTH)
      return setPaginate(paginate + CARDS_MORE_MOBILE);
  }

  const handleResize = useCallback(() => {
    if (windowWidth !== window.innerWidth) {
      setWindowWidth(window.innerWidth);
    }
  }, [windowWidth]);

  useEffect(() => {
    let timer;
    const handleResizeDelay = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        handleResize();
        changePaginate()
      }, 100);
    };

    window.addEventListener("resize", handleResizeDelay);
    return () => {
      window.removeEventListener("resize", handleResizeDelay);
    };
  }, [handleResize]);

  const cardsShown = useMemo(() => showAllMovies ? movies.length : paginate, [movies, paginate, showAllMovies])

  return (
    <section
      className={`movies-card-list ${pathname === '/saved-movies' ? 'movies-card-list_type_saved-movies' : ''}`}>
      {isLoading && <Preloader/>}

      {!movies.length && (
        <div className="movies-card-list__message">
          <p>{
            searchMessage ? searchMessage : 'Введите ключевое слово'
          }
          </p>
        </div>
      )}

      <div className="movies-card-list__container">
        {movies.map((card, i) => {
          return i < cardsShown
            ?
            <MoviesCard
              card={card}
              saveMovie={saveMovie}
              savedMovies={savedMovies}
              deleteMovie={deleteMovie}
              key={card.id || card.movieId}
              isLoading={isLoading}
            />
            : null
        })}
      </div>

      {paginateButton && (
        <button
          className="movies-card-list__button button-hover"
          type="button"
          onClick={handlePaginate}
        >
          Ещё
        </button>
      )}
    </section>
  )
}

export default MoviesCardList;

