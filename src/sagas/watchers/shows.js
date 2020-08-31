import { takeLatest } from "redux-saga/effects";

import { GET_SHOW, GET_SHOWS } from "../../constants/shows";
import { getShow, getShows } from "../workers/shows";

export default function* showsWatcher() {
  yield takeLatest(GET_SHOW, getShow);
  yield takeLatest(GET_SHOWS, getShows);
}
