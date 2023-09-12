import React from "react";
import {useEffect, useState} from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as moviesApi from "../../utils/MoviesApi";
import {filterByDuration, filterByName} from "../../utils/filters";

const getShortFilmsFromStorage = () => {
  const shortFilmsFromStorage = localStorage.getItem("isShort");
  let state = false;

  if (shortFilmsFromStorage) {
    return shortFilmsFromStorage === 'true'
  }

  return state;
}

const getMoviesFromStorageByKey = (key) => {
  const moviesJSON = localStorage.getItem(key)
  const movies = []

  if (moviesJSON) {
    return JSON.parse(moviesJSON)
  }

  return movies
}

const saveFilterParamsToStorage = (filteredMovies, search, isShort) => {
  localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
  localStorage.setItem("isShort", JSON.stringify(isShort));
  localStorage.setItem("moviesSearch", search);
}

const Movies = ({
  isLoading,
  setIsLoading,
  saveMovie,
  deleteMovie,
  savedMovies,
}) => {
  const [isShort, setIsShort] = useState(() => getShortFilmsFromStorage());
  const [search, setSearch] = useState(
    () => localStorage.getItem("moviesSearch") ?? ""
  );
  const [movies, setMovies] = useState(() => getMoviesFromStorageByKey('allMovies'));

  const [filteredMovies, setFilteredMovies] = useState(getMoviesFromStorageByKey('filteredMovies'));
  const [searchMessage, setSearchMessage] = useState('');

  function handleSearchMovies(search, isShort) {
    if (!movies.length) {
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
          setMovies(movies)
          filter(movies, search, isShort);
          setSearchMessage('');
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filter(movies, search, isShort);
    }
  }

  function handleToggleSwitcher(search, isShort) {
    filter(movies, search, isShort)
  }

  function filter(movies, search, isShort) {
    const filteredByName = filterByName(movies, search)
    const filteredByDuration = filterByDuration(filteredByName, isShort)
    setFilteredMovies(filteredByDuration)

    saveFilterParamsToStorage(filteredByDuration, search, isShort)
  }

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("filteredMovies"));
    if (movies) {
      if (movies.length === 0) {
        setSearchMessage('Ничего не найдено');
      }
    }

  }, [filteredMovies, search]);

  return (
    <main className="main">
      <SearchForm
        isChecked={isShort}
        setIsChecked={setIsShort}
        moviesSearch={search}
        handleSearchMovies={handleSearchMovies}
        setMoviesSearch={setSearch}
        onSwitch={handleToggleSwitcher}
      />
      <MoviesCardList
        isLoading={isLoading}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
        savedMovies={savedMovies}
        movies={filteredMovies}
        searchMessage={searchMessage}
      />
    </main>
  );
};

export default Movies;
