import React, {useEffect, useState} from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {filterByDuration, filterByName} from "../../utils/filters";

const SavedMovies = ({
  isLoading,
  saveMovie,
  savedMovies,
  deleteMovie,
}) => {
  const [isShort, setIsShort] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(() => savedMovies);

  function handleSearchMovies(search, isShort) {
    filter(savedMovies, search, isShort)
  }

  function filter(movies, search, isShort) {
    const filteredByName = filterByName(movies, search)
    const filteredByDuration = filterByDuration(filteredByName, isShort)
    setFilteredMovies(filteredByDuration)
  }

  useEffect(() => {
    setFilteredMovies(savedMovies)
    filter(savedMovies, search, isShort)
  }, [savedMovies]);

  return (
    <main className="main">
      <SearchForm
        isChecked={isShort}
        moviesSearch={search}
        setMoviesSearch={setSearch}
        setIsChecked={setIsShort}
        handleSearchMovies={handleSearchMovies}
        onSwitch={handleSearchMovies}
      />
      <MoviesCardList
        isLoading={isLoading}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
        savedMovies={savedMovies}
        movies={filteredMovies}
        searchMessage='Фильмы не найдены'
        showAllMovies
      />
    </main>
  )
}

export default SavedMovies;
