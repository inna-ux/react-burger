import {
  GET_INGREDIENTS_DATA_SUCCESS,
  GET_INGREDIENTS_DATA_LOADING,
  GET_INGREDIENTS_DATA_ERROR,
  TIngredientsDataActions
} from "../actions/ingredients-data";
import { TIngredientsDataState } from "../../utils/types/types";

// список всех полученных ингредиентов

export const initialState: TIngredientsDataState = {
  // Исходное состояние
  data: [],
  loading: false,
  error: null,
};
//Получение списка ингредиентов от API. Используется в компоненте BurgerIngredients.

export const ingredientsData = (state = initialState, action: TIngredientsDataActions) => {
  switch (action.type) {
    case GET_INGREDIENTS_DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_INGREDIENTS_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case GET_INGREDIENTS_DATA_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};
