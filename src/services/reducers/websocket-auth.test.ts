import { wsAuthReducer, initialState } from "./websocket-aurth";
import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_GET_AUTH_ORDERS,
  TWsAuthActions,
} from "../actions/websocket-aurth";
import { IWsGetOrder } from "../actions/websocket-aurth";
import { TOrderType } from "../../utils/types/types";


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

const authOrders: IWsGetOrder = {
  orders: [item],
  success: true,
};
describe("Redux store and actions", () => {
  it("should return the initial state", () => {
    expect(wsAuthReducer(undefined, {} as TWsAuthActions)).toEqual(
      initialState
    );
  });
  it("ws auth connection success", () => {
    const action = { type: WS_AUTH_CONNECTION_SUCCESS };
    const state = wsAuthReducer(initialState, action);
    expect(state).toStrictEqual({ ...initialState, wsAuthConnected: true });
  });
  it("ws auth connection error", () => {
    const action = { type: WS_AUTH_CONNECTION_ERROR, payload: "Error" };
    const state = wsAuthReducer(initialState, action);
    expect(state).toEqual({ ...initialState, wsAuthError: "Error" });
  });
  it("ws auth connection closed", () => {
    const action = { type: WS_AUTH_CONNECTION_CLOSED };
    const state = wsAuthReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
  it("ws get auth orders", () => {
    const action = { type: WS_GET_AUTH_ORDERS, payload: authOrders };
    const state = wsAuthReducer(initialState, action);
    expect(state).toEqual({ ...initialState, authOrders: authOrders.orders });
  });
});
