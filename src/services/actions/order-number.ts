import { postOrderData } from "../../utils/api";
import { AppDispatch, AppThunk } from "../../utils/types/index";

export const GET_ORDER_REQUEST: "GET_ORDER_REQUEST" = "GET_ORDER_REQUEST"; //тип экшена
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED: "GET_ORDER_FAILED" = "GET_ORDER_FAILED";
export const ADD_ORDER_ITEMS: "ADD_ORDER_ITEMS" = "ADD_ORDER_ITEMS";
export const DELETE_ORDER_INFO: "DELETE_ORDER_INFO" = "DELETE_ORDER_INFO";

// Типизация экшенов
export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: number,
}

export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
}

export interface IAddOrderItems {
    readonly type: typeof ADD_ORDER_ITEMS;
    readonly payload: string[],
}

export interface IDeleteOrderInfo {
  readonly type: typeof DELETE_ORDER_INFO;
}

// Объединение типов
export type TGetOrderActions = 
  | IGetOrderRequest
  | IGetOrderSuccess
  | IGetOrderFailed
  | IAddOrderItems
  | IDeleteOrderInfo
  ;

//Типизация thunk-экшенов
// Получение и обновление номера заказа в модальном окне OrderDetails.
export const getOrderData: AppThunk = (orderData: Array<string>) => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_ORDER_REQUEST,
  });
  postOrderData(orderData)
    .then((res) => {
      res && res.success
        ? dispatch({
            type: GET_ORDER_SUCCESS,
            payload: res.order.number,
          })
        : dispatch({
            type: GET_ORDER_FAILED,
          });
    })
    .catch((e) => {
      dispatch({
        type: GET_ORDER_FAILED,
      });
    });
};

// типизация Генераторов экшенов
export const addOrderitems = (payload: string[]): IAddOrderItems => ({ type: ADD_ORDER_ITEMS, payload });
