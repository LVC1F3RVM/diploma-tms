import { call, put, select } from "redux-saga/effects";
import { getShow as getShowAPI, getShows as getShowsAPI } from "../../api/show";
import { setShow, setShows } from "../../actions/shows";

export function* getShow(action) {
  if (action.payload) {
    const show = yield call(getShowAPI, action.payload);
    yield put(setShow(show));
  }
}
export function* getShows(action) {
  const {
    show: { shows },
  } = yield select();
  if (shows) {
    return;
  }
  if (action.payload) {
    const shows = yield call(getShowsAPI, action.payload);
    yield put(setShows(shows));
  }
}
