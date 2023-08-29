import React from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

function SearchForm() {
    return (
     <section className="search-form">
            <form className="search-form__form"  name="search">
                <div className="search-form__field">
                    <input
                         className="search-form__input" 
                         placeholder="Фильм" 
                         type="text"
                         name="search" 
                         required
                         />
                    <button 
                    type="submit" 
                    className="search-form__submit-button button-hover"></button>
                </div>
                        <FilterCheckbox />
            </form>
               
         </section>
    )
}

export default SearchForm;