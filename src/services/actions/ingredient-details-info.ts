import { TIngredient } from "../../utils/types";

// Добавление данных о просматриваемом в модальном окне IngredientDetails ингредиенте.
// Удаление данных о просматриваемом в модальном окне ингредиенте при закрытии модального окна.
export const ADDING_DATA_INGREDIENTDETAILS: "ADDING_DATA_INGREDIENTDETAILS" = "ADDING_DATA_INGREDIENTDETAILS"; //тип экшена
export const DELETE_DATA_INGREDIENTDETAILS: "DELETE_DATA_INGREDIENTDETAILS" = "DELETE_DATA_INGREDIENTDETAILS"; //тип экшена

//типизация экшенов
export interface IAddDataIngredientDetails {
  readonly type: typeof ADDING_DATA_INGREDIENTDETAILS;
  payload: TIngredient
}

export interface IDeleteDataIngredientDetails {
  readonly type: typeof DELETE_DATA_INGREDIENTDETAILS;
}

// Объединение типов
export type TDataIngredientDetailsActions = | IAddDataIngredientDetails | IDeleteDataIngredientDetails;

//типизация генераторов экшенов
export const openIngredientInfo = (payload: TIngredient): IAddDataIngredientDetails => ({
  type: ADDING_DATA_INGREDIENTDETAILS,
  payload,
});
export const closeIngredientInfo = (): IDeleteDataIngredientDetails => ({
  type: DELETE_DATA_INGREDIENTDETAILS,
});
