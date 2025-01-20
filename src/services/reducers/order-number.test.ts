
import { orderNumber, initialState } from "./order-number";
import {
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  ADD_ORDER_ITEMS,
  DELETE_ORDER_INFO,
  TGetOrderActions,
} from "../actions/order-number";
import { TOrderNumber } from "../../utils/types/types";

const CreatedOrder: TOrderNumber = {
  orderNumber: 6257,
  orderItems: ["609646e4dc916e00276b286e", "609646e4dc916e00276b2870"],
  orderRequest: false,
  orderFailed: false,
};

describe("Redux store and actions", () => {
  it("should return the initial state", () => {
    expect(orderNumber(undefined, {} as TGetOrderActions)).toEqual(
      initialState
    );
  });
  it("get order request", () => {
    const action = { type: GET_ORDER_REQUEST };
    const state = orderNumber(initialState, action);
    expect(state).toStrictEqual({ ...initialState, orderRequest: true });
  });
  it("get order success", () => {
    const action = {
      type: GET_ORDER_SUCCESS,
      payload: CreatedOrder.orderNumber,
    };
    const state = orderNumber(initialState, action);
    expect(state).toEqual({
      ...initialState,
      orderNumber: CreatedOrder.orderNumber,
    });
  });
  it("get order failed", () => {
    const action = { type: GET_ORDER_FAILED };
    const state = orderNumber(initialState, action);
    expect(state).toEqual({
      orderNumber: 0,
      orderFailed: true,
      orderRequest: false,
    });
  });
  it("add order items", () => {
    const action = { type: ADD_ORDER_ITEMS, payload: CreatedOrder.orderItems };
    const state = orderNumber(initialState, action);
    expect(state).toEqual({
      ...initialState,
      orderItems: CreatedOrder.orderItems,
    });
  });
  it("delete order items", () => {
    const action = { type: DELETE_ORDER_INFO };
    const state = orderNumber(initialState, action);
    expect(state).toEqual(initialState);
  });
});
