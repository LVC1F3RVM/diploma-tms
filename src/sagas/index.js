import { all } from "redux-saga/effects";
import shows from "./watchers/shows";
import premieres from "./watchers/premieres";

export default function* rootWatcher() {
  yield all([shows(), premieres()]);
}
