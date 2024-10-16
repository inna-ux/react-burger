import { combineReducers } from "redux";
import { ingredientsData } from "./ingredients-data.js";
import { listIngredientsConstructor } from "./ingredients-constructor.js";
import { ingredientDetailsInfo } from "./ingredient-details-info.js";
import { orderNumber } from "./order-number.js";

// Корневой редьюсер
export const rootReducer = combineReducers({
  listIngredients: ingredientsData,
  listIngredientsBurgerConstructor: listIngredientsConstructor,
  currentIngredient: ingredientDetailsInfo,
  createdOrder: orderNumber,
});

//как выглядит наше хранилище
//   {
//     listIngredients : {
//         data: [],
//         loading: false,
//       error: null,

//     },
//     listIngredientsBurgerConstructor: {
//         buns: [],
//         otherIngredients: []
//     },
//     currentIngredient: {
//         item: null
//     },
//     createdOrder: {
//         orderNumber: 0,
//         orderRequest: false,
//         orderFailed: false
//     }
//   }
