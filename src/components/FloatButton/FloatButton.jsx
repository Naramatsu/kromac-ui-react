import React, { useState, useContext } from "react";
import {
  CLOSE,
  DARK,
  ENGLISH,
  LIGHT,
  OPEN,
  SHORT_ENGLISH,
  SHORT_SPANISH,
  SPANISH,
} from "../../utils/constants";
import { FaPlus } from "react-icons/fa6";
import { PreferencesContext } from "../../store";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const generateShortPreference = (preference) => {
  switch (preference) {
    case DARK:
      return <FaRegMoon />;
    case LIGHT:
      return <FaRegSun />;
    case ENGLISH:
      return SHORT_ENGLISH;
    default:
      return SHORT_SPANISH;
  }
};

const FloatButton = () => {
  const { languaje, theme, setTheme, setLanguaje } =
    useContext(PreferencesContext);
  const [isOpen, setIsOpen] = useState(CLOSE);
  const showLanguajePreference = false;

  const handlerOpen = () => {
    setIsOpen(isOpen === CLOSE ? OPEN : CLOSE);
  };

  const handlerLanguaje = () => {
    setLanguaje(languaje === SPANISH ? ENGLISH : SPANISH);
  };

  const handlerTheme = () => {
    setTheme(theme === DARK ? LIGHT : DARK);
  };

  return (
    <section className="kromac-float-btn">
      <FaPlus className={`${isOpen} btn-setting`} onClick={handlerOpen} />
      <section className="kromac-float-btn-options">
        <button onClick={handlerTheme}>{generateShortPreference(theme)}</button>
        {showLanguajePreference && (
          <button onClick={handlerLanguaje}>
            {generateShortPreference(languaje)}
          </button>
        )}
      </section>
    </section>
  );
};

export default FloatButton;
