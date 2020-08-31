import { all } from "redux-saga/effects";
import shows from "./watchers/shows";

export default function* rootWatcher() {
  yield all([shows()]);
}
