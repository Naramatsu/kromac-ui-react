import React, { useReducer } from "react";
import PreferencesReducer from "./reducer";
import { PreferencesContext } from ".";
import { CHANGE_LANGUAJE, CHANGE_THEME, CHANGE_VERSION } from "./types";
import {
  ENGLISH,
  KROMAC_V18,
  LANGUAJE,
  LIGHT,
  THEME,
  VERSION,
} from "../utils/constants";

const PreferencesState = ({ children }) => {
  const initialState = {
    languaje: localStorage.getItem(LANGUAJE) || ENGLISH,
    theme: localStorage.getItem(THEME) || LIGHT,
    version: localStorage.getItem(VERSION) || KROMAC_V18,
  };
  const [globalState, dispatch] = useReducer(PreferencesReducer, initialState);

  const setLanguaje = (languaje) => {
    dispatch({
      type: CHANGE_LANGUAJE,
      payload: languaje,
    });
    localStorage.setItem(LANGUAJE, languaje);
  };

  const setTheme = (theme) => {
    dispatch({
      type: CHANGE_THEME,
      payload: theme,
    });
    localStorage.setItem(THEME, theme);
  };

  const setVersion = (version) => {
    dispatch({
      type: CHANGE_VERSION,
      payload: version,
    });
    localStorage.setItem(VERSION, version);
  };

  const combineFunctions = {
    setLanguaje,
    setTheme,
    setVersion,
  };

  return (
    <PreferencesContext.Provider
      value={{ ...globalState, ...combineFunctions }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesState;
