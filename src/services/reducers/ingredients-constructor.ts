import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENTS,
  RESET_INGREDIENTS,
  ADD_BUNS, TIngrediensConstructorActions
} from "../actions/ingredients-constructor";
import { TListIngredientsConstructorState } from "../../utils/types/types";


//список всех ингредиентов в текущем конструкторе бургера
export const initialState: TListIngredientsConstructorState = {
  // Исходное состояние
  buns: [],
  otherIngredients: [],
};
// Хранение списка ингредиентов для конструктора бургера. Используется в компоненте BurgerConstructor.
export const listIngredientsConstructor = (state = initialState, action: TIngrediensConstructorActions) => {
  switch (action.type) {
    case ADD_BUNS:
      return { ...state, buns: action.payload };
    case ADD_INGREDIENT:
     
    return {
      ...state,
      otherIngredients: [...state.otherIngredients, action.payload],
    };
    case DELETE_INGREDIENT:
      return {
        ...state,
        otherIngredients: [...state.otherIngredients].filter(
          (item) => item.id !== action.item.id
        ),
      };
    case RESET_INGREDIENTS:
      return { buns: [], otherIngredients: [] };
    case MOVE_INGREDIENTS:
      const listItems = [...state.otherIngredients];
      listItems.splice(
        action.dragIndex,
        0,
        listItems.splice(action.hoverIndex, 1)[0]
      );
      return {
        ...state,
        otherIngredients: listItems,
      };

    default:
      return state;
  }
};
