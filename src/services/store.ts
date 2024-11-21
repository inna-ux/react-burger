import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { thunk } from "redux-thunk";
import { compose } from "redux";

declare const window: any;
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
