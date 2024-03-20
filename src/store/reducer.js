import { CHANGE_LANGUAJE, CHANGE_THEME, CHANGE_VERSION } from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LANGUAJE:
      return {
        ...state,
        languaje: payload,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: payload,
      };
    case CHANGE_VERSION:
      return {
        ...state,
        version: payload,
      };

    default:
      return state;
  }
};

export default reducer;
