import {
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  ADD_ORDER_ITEMS,
  DELETE_ORDER_INFO,
  TGetOrderActions 
} from "../actions/order-number";
import { TOrderNumber } from "../../utils/types/types";


//объект созданного заказа

const initialState: TOrderNumber = {
  // Исходное состояние
  orderNumber: 0,
  orderRequest: false,
  orderFailed: false,
  orderItems: [],
};

// Получение и обновление номера заказа в модальном окне OrderDetails.

export const orderNumber = (state = initialState, action: TGetOrderActions) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.payload,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        orderNumber: 0,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case ADD_ORDER_ITEMS: {
      return { ...state, orderItems: action.payload };
    }

    case DELETE_ORDER_INFO: {
      return {
        ...state,
        orderItems: [],
        orderNumber: 0,
        orderRequest: false,
        orderFailed: false,
      };
    }

    default: {
      return state;
    }
  }
};
