import { GET_SHOW, GET_SHOWS, SET_SHOW, SET_SHOWS } from "../constants/shows";

export const getShow = (id) => ({
  type: GET_SHOW,
  payload: id,
});

export const getShows = (page) => ({
  type: GET_SHOWS,
  payload: page,
});

export const setShows = (shows) => ({
  type: SET_SHOWS,
  payload: shows,
});

export const setShow = (show) => ({
  type: SET_SHOW,
  payload: show,
});
