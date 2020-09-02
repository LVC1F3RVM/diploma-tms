import { call, put } from "redux-saga/effects";
import { getShow as getShowAPI, getShows as getShowsAPI } from "../../api/show";
import { setShow, setShows } from "../../actions/shows";

export function* getShow(action) {
  if (action.payload) {
    const show = yield call(getShowAPI, action.payload);
    yield put(setShow(show));
  }
}
export function* getShows(action) {
  if (action.payload) {
    const shows = yield call(getShowsAPI, action.payload);
    yield put(setShows(shows));
  }
}
