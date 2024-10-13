export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const MOVE_INGREDIENTS = "MOVE_INGREDIENTS";
export const RESET_INGREDIENTS = "RESET_INGREDIENTS"; //тип экшена
export const ADD_BUNS = "ADD_BUNS";
// Хранение списка ингредиентов для конструктора бургера. Используется в компоненте BurgerConstructor.
export const addIngredientInConstructor = (payload) => ({
  type: ADD_INGREDIENT,
  payload,
});

export const addBunsInConstructor = (payload) => ({ type: ADD_BUNS, payload });
