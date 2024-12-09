import { combineReducers } from "redux";
import { ingredientsData } from "./ingredients-data";
import { listIngredientsConstructor } from "./ingredients-constructor";
import { ingredientDetailsInfo } from "./ingredient-details-info";
import { orderNumber } from "./order-number";
import { userReducer } from "./user/user-reducers";
import { wsReducer } from "./websocket";
import { currentOrderReducer } from "./current-order";
import { wsAuthReducer } from "./websocket-aurth";

// Корневой редьюсер
export const rootReducer = combineReducers({
  listIngredients: ingredientsData,
  listIngredientsBurgerConstructor: listIngredientsConstructor,
  currentIngredient: ingredientDetailsInfo,
  createdOrder: orderNumber,
  user: userReducer,
  wsFeedOrders: wsReducer,
  currentOrder: currentOrderReducer,
  authFeedOrders: wsAuthReducer
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
//      wsFeedOrders: {
//          wsConnected: false,
//          wsError: '',
//          orders: [],
//          total: 0,
//          totalToday: 0
//      }
//     currentOrder: {
//         item: null
//     },
//      authFeedOrders: {
//          wsAuthConnected: false,
    //      wsAuthError: '',
    //      authOrders: null,
//      }
//   }
