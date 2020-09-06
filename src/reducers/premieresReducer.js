import { SET_PREMIERES } from "../constants/premieres";

const initialState = {
  lastPremieres: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PREMIERES:
      return { ...state, lastPremieres: payload };

    default:
      return state;
  }
};
