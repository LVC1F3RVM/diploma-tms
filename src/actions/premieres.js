import { GET_PREMIERES, SET_PREMIERES } from "../constants/premieres";

export const getPremieres = () => ({
  type: GET_PREMIERES,
});

export const setPremieres = (premieres) => ({
  type: SET_PREMIERES,
  payload: premieres,
});
