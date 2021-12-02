import { SET_SHOW, SET_SHOWS, SET_SEARCHED_SHOWS } from "../constants/shows";

const initialState = {
  currentShow: null,
  shows: null,
  searchedShows: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHOW:
      return { ...state, currentShow: payload };

    case SET_SHOWS:
      return { ...state, shows: payload };

    case SET_SEARCHED_SHOWS:
      return { ...state, searchedShows: payload };
    default:
      return state;
  }
};
