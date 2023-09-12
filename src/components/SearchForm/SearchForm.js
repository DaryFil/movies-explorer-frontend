import React from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

const SearchForm = ({
  isChecked,
  setIsChecked,
  moviesSearch,
  setMoviesSearch,
  handleSearchMovies,
  onSwitch
}) => {
  const handleChange = (e) => {
    setMoviesSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!moviesSearch) return;
    e.preventDefault();
    handleSearchMovies(moviesSearch, isChecked);
  };

  return (
    <section className="search-form">
      <form className="search-form__form"
            name="search"
            onSubmit={handleSubmit}
            noValidate
      >
        <div className="search-form__field">
          <input
            className="search-form__input"
            placeholder="Фильм"
            type="text"
            name="search"
            value={moviesSearch}
            required
            onChange={handleChange}
          />
          <button
            type="submit"
            className="search-form__submit-button button-hover"
          >
          </button>

        </div>
        <FilterCheckbox
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          moviesSearch={moviesSearch}
          onSwitch={onSwitch}
        />
      </form>
    </section>
  )
}

export default SearchForm;
