import { call, put } from "redux-saga/effects";
import { getPremieres as getPremieresAPI } from "../../api/premiere";
import { setPremieres } from "../../actions/premieres";

export function* getPremieres(action) {
  const premieres = yield call(getPremieresAPI, action.payload);
  yield put(setPremieres(premieres));
}
