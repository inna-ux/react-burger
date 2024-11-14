import { postOrderData } from "../../utils/api";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST"; //тип экшена
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const ADD_ORDER_ITEMS = "ADD_ORDER_ITEMS";
export const DELETE_ORDER_INFO = "DELETE_ORDER_INFO";

// Получение и обновление номера заказа в модальном окне OrderDetails.
export const getOrderData = (orderData) => (dispatch) => {
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

export const addOrderitems = (payload) => ({ type: ADD_ORDER_ITEMS, payload });
