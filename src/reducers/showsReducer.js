import { SET_SHOW, SET_SHOWS } from "../constants/shows";

const initialState = {
  currentShow: null,
  shows: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHOW:
      return { ...state, currentShow: payload };
    
    case SET_SHOWS:
      return { ...state, shows: payload };
    default:
      return state;
  }
};
