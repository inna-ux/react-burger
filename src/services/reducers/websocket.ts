import {WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS, TWsActions} from '../actions/websocket';
import { TWsState } from '../../utils/types/types';   


  export const initialState: TWsState = {
    wsConnected: false,
    wsError: '',
    orders: [],
    total: 0,
    totalToday: 0
  }
  
  export const wsReducer = (state = initialState, action: TWsActions): TWsState => {
    switch (action.type) {
      case WS_CONNECTION_SUCCESS:
        return {
          ...state,
          wsError: '',
          wsConnected: true
        };
      case WS_CONNECTION_ERROR:
        return {
          ...state,
          wsError: action.payload,
          wsConnected: false
        };
      case WS_CONNECTION_CLOSED:
        return {
          ...state,
          wsError: '',
          wsConnected: false,
          orders: [],
        };
      case WS_GET_ORDERS:
        return {
          ...state,
          wsError: '',
          orders: action.payload.orders,
          total: action.payload.total,
          totalToday: action.payload.totalToday
        };
      default:
        return state;
    }
  };