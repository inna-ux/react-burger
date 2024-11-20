import { getIngredients } from "../../utils/api";
import { TIngredient } from "../../utils/types";

// Получение списка ингредиентов от API. Используется в компоненте BurgerIngredients.

export const GET_INGREDIENTS_DATA_SUCCESS: "GET_INGREDIENTS_DATA_SUCCESS" = "GET_INGREDIENTS_DATA_SUCCESS";

export const GET_INGREDIENTS_DATA_LOADING: "GET_INGREDIENTS_DATA_LOADING" = "GET_INGREDIENTS_DATA_LOADING";
export const GET_INGREDIENTS_DATA_ERROR: "GET_INGREDIENTS_DATA_ERROR" = "GET_INGREDIENTS_DATA_ERROR";

//типизация экшенов
export interface IGetIngredientsDataLoading {
  readonly type: typeof GET_INGREDIENTS_DATA_LOADING;
}

export interface IGetIngredientsDataSuccess {
  readonly type: typeof GET_INGREDIENTS_DATA_SUCCESS;
  payload: Array<TIngredient>
}

export interface IGetIngredientsDataError {
  readonly type: typeof GET_INGREDIENTS_DATA_ERROR;
}


// Объединение типов
export type TIngredientsDataActions = 
  | IGetIngredientsDataLoading
  | IGetIngredientsDataSuccess
  | IGetIngredientsDataError
  ;
  
//Типизация thunk-экшенов
export const getIngredientsData = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_DATA_LOADING,
  });
  return getIngredients()
    .then((res) => {
      dispatch({
        type: GET_INGREDIENTS_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_INGREDIENTS_DATA_ERROR,
        payload: error.message,
      });
    });
};
