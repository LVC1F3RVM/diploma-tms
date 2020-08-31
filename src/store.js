import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootWatcher from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootWatcher);

export default store;
