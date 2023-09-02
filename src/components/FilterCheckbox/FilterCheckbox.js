import React from "react";
import { useState } from 'react';
import '../FilterCheckbox/FilterCheckbox.css';

function FilterCheckbox() {

    const [isShortFilm, setIsShortFilm] = useState(false);

    const handleChangeSwitchToggle = () => {
        setIsShortFilm(!isShortFilm);
      };

    return (
      <label className="checkbox-label button-hover">
          <input
             className="checkbox-label__input"
             id="checkbox"
             type="checkbox"
             onChange={handleChangeSwitchToggle}
            //  readOnly
      />
      <span 
        className={`checkbox-label__name ${isShortFilm ? 'checkbox-label__name_active' : ''}`}
      >
      Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
