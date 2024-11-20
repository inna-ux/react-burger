import {
  GET_INGREDIENTS_DATA_SUCCESS,
  GET_INGREDIENTS_DATA_LOADING,
  GET_INGREDIENTS_DATA_ERROR,
} from "../actions/ingredients-data.js";
import { TIngredientsDataState } from "../../utils/types.js";
import { TIngredientsDataActions } from "../actions/ingredients-data.js";
// список всех полученных ингредиентов

const initialState: TIngredientsDataState = {
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
