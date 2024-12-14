import { wsReducer, initialState } from "./websocket";
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "../actions/websocket";
import { TWsGetOrder } from "../actions/websocket";
import { TOrderType } from "../../utils/types/types";
import { TWsActions } from "../actions/websocket";
const item: TOrderType = {
  _id: "673b6de0b27b06001c3e8f5b",
  name: "Флюоресцентный люминесцентный бургер",
  ingredients: [
    "643d69f5c3f7b9001cfa093d",
    "643d69f5c3f7b9001cfa093e",
    "643d69f5c3f7b9001cfa093d",
  ],
  createdAt: "2024-11-18T16:40:00.719Z",
  number: 59706,
  status: "done",
  updatedAt: "2024-11-18T16:40:02.198Z",
};
const feedOrders: TWsGetOrder = {
  orders: [item],
  success: true,
  total: 59332,
  totalToday: 98,
};
describe("Redux store and actions", () => {
  it("should return the initial state", () => {
    expect(wsReducer(undefined, {} as TWsActions)).toEqual(initialState);
  });
  it("ws connection success", () => {
    const action = { type: WS_CONNECTION_SUCCESS };
    const state = wsReducer(initialState, action);
    expect(state).toStrictEqual({ ...initialState, wsConnected: true });
  });
  it("ws connection error", () => {
    const action = { type: WS_CONNECTION_ERROR, payload: "Error" };
    const state = wsReducer(initialState, action);
    expect(state).toEqual({ ...initialState, wsError: "Error" });
  });
  it("ws connection closed", () => {
    const action = { type: WS_CONNECTION_CLOSED };
    const state = wsReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
  it("ws get orders", () => {
    const action = { type: WS_GET_ORDERS, payload: feedOrders };
    const state = wsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      orders: feedOrders.orders,
      total: feedOrders.total,
      totalToday: feedOrders.totalToday,
    });
  });
});
