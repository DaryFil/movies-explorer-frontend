import React from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

function SearchForm() {
    return (
     <section className="search-form">
           <div className="search-form__container">
               <form className="search-form__form">
                    <label className="search-form__field">
                        <input
                         className="search-form__input" 
                         placeholder="Фильм" 
                         type="text"
                         name="search" 
                         required
                         />
                    </label>
                    <button 
                    type="submit" 
                    className="search-form__submit-button button-hover"></button>
               </form>
               <FilterCheckbox />
               <div className="search-form__border"></div>
           </div>  
     </section>
    )
}

export default SearchForm;