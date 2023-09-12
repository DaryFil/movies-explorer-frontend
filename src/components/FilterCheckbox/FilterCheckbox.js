import React from "react";
import '../FilterCheckbox/FilterCheckbox.css';

const FilterCheckbox = ({
  isChecked,
  setIsChecked,
  onSwitch,
  moviesSearch
}) => {

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    onSwitch(moviesSearch, !isChecked)
    localStorage.setItem("isShort", JSON.stringify(!isChecked));
  };

  return (
    <label className="checkbox-label button-hover">
      <input
        className="checkbox-label__input"
        id="checkbox"
        type="checkbox"
        onChange={handleCheckbox}
        checked={isChecked}
      />
      <span
        className={`checkbox-label__name ${isChecked ? 'checkbox-label__name_active' : ''}`}
      >
      Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
