import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from "./reducers";
import { thunk } from "redux-thunk";
import { socketMiddleware } from './middleware/socketMiddleware';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START, WS_CONNECTION_ERROR, WS_GET_ORDERS, WS_CONNECTION_SUCCESS } from './actions/websocket';
import { WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_ERROR, WS_GET_AUTH_ORDERS, WS_AUTH_CONNECTION_SUCCESS } from './actions/websocket-aurth';
const wsActions = {
  wsStart: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  getOrders: WS_GET_ORDERS
};
const wsAuthActions = {
  wsStart: WS_AUTH_CONNECTION_START,
  onOpen: WS_AUTH_CONNECTION_SUCCESS,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onError: WS_AUTH_CONNECTION_ERROR,
  getOrders: WS_GET_AUTH_ORDERS
};

declare const window: any;

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions, false), socketMiddleware(wsAuthActions, true)))
);
export default store;

