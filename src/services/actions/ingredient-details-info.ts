// Добавление данных о просматриваемом в модальном окне IngredientDetails ингредиенте.
// Удаление данных о просматриваемом в модальном окне ингредиенте при закрытии модального окна.
export const ADDING_DATA_INGREDIENTDETAILS: "ADDING_DATA_INGREDIENTDETAILS" = "ADDING_DATA_INGREDIENTDETAILS"; //тип экшена
export const DELETE_DATA_INGREDIENTDETAILS: "DELETE_DATA_INGREDIENTDETAILS" = "DELETE_DATA_INGREDIENTDETAILS"; //тип экшена

export const openIngredientInfo = (payload) => ({
  type: ADDING_DATA_INGREDIENTDETAILS,
  payload,
});
export const closeIngredientInfo = () => ({
  type: DELETE_DATA_INGREDIENTDETAILS,
});
