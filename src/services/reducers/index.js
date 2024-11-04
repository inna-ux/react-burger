import { combineReducers } from "redux";
import { ingredientsData } from "./ingredients-data.js";
import { listIngredientsConstructor } from "./ingredients-constructor.js";
import { ingredientDetailsInfo } from "./ingredient-details-info.js";
import { orderNumber } from "./order-number.js";
import { userReducer } from "./user/user-reducers.js";

// Корневой редьюсер
export const rootReducer = combineReducers({
  listIngredients: ingredientsData,
  listIngredientsBurgerConstructor: listIngredientsConstructor,
  currentIngredient: ingredientDetailsInfo,
  createdOrder: orderNumber,
  user: userReducer,
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
//     },
//     user: {
//         user: null,
//         isAuthChecked: false,

//         registerRequest: false,
//         registerFailed: false,

//         loginRequest: false,
//       loginFailed: false,

//        logoutUserRequest: false,
//        logoutUserFailed: false,

//       updateUserRequest: false,
//       updateUserFailed: false,

//      }
//   }
