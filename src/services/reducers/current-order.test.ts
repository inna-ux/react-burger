
import { currentOrderReducer, initialState } from "./current-order";
import {
  ADD_CURRENT_ORDER_INFO,
  DELETE_CURRENT_ORDER_INFO,
  TCurrentOrderActions,
} from "../actions/current-order";
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

describe("Redux store and actions", () => {
  it("should return the initial state", () => {
    expect(currentOrderReducer(undefined, {} as TCurrentOrderActions)).toEqual(
      initialState
    );
  });
  it("adding order info", () => {
    const action = { type: ADD_CURRENT_ORDER_INFO, payload: item };
    const state = currentOrderReducer(initialState, action);
    expect(state).toEqual({ item: item });
  });
  it("delete order info", () => {
    const action = { type: DELETE_CURRENT_ORDER_INFO };
    const state = currentOrderReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
