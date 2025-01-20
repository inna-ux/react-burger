import {
  ADD_CURRENT_ORDER_INFO,
  DELETE_CURRENT_ORDER_INFO,
  TCurrentOrderActions,
} from "../actions/current-order";
import { TCurrentOrderState } from "../../utils/types/types";

export const initialState: TCurrentOrderState = {
  item: null,
};

export const currentOrderReducer = (
  state = initialState,
  action: TCurrentOrderActions
) => {
  switch (action.type) {
    case ADD_CURRENT_ORDER_INFO: {
      return { item: action.payload };
    }
    case DELETE_CURRENT_ORDER_INFO: {
      return { item: null };
    }
    default: {
      return state;
    }
  }
};
