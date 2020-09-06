import { combineReducers } from "redux";
import show from "./showsReducer";
import premieres from "./premieresReducer";

const rootReducer = combineReducers({
  show,
  premieres,
});

export default rootReducer;
