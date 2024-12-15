import {
    WS_AUTH_CONNECTION_SUCCESS,
    WS_AUTH_CONNECTION_ERROR,
    WS_AUTH_CONNECTION_CLOSED,
    WS_GET_AUTH_ORDERS, TWsAuthActions
  } from '../actions/websocket-aurth';
  import {TWsAuthState} from '../../utils/types/types';
  
  
  
  
  export const initialState: TWsAuthState = {
    wsAuthConnected: false,
    wsAuthError: '',
    authOrders: null,
  }
  
  export const wsAuthReducer = (state = initialState, action: TWsAuthActions): TWsAuthState => {
    switch (action.type) {
      case WS_AUTH_CONNECTION_SUCCESS:
        return {
          ...state,
          wsAuthError: '',
          wsAuthConnected: true
        };
      case WS_AUTH_CONNECTION_ERROR:
        return {
          ...state,
          wsAuthError: action.payload,
          wsAuthConnected: false
        };
      case WS_AUTH_CONNECTION_CLOSED:
        return {
          ...state,
          wsAuthError: '',
          wsAuthConnected: false,
          authOrders: null,
        };
      case WS_GET_AUTH_ORDERS:
        return {
          ...state,
          wsAuthError: '',
          authOrders: action.payload.orders,
        };
      default:
        return state;
    }
  };