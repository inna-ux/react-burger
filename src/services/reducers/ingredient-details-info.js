import {
  ADDING_DATA_INGREDIENTDETAILS,
  DELETE_DATA_INGREDIENTDETAILS,
} from "../actions/ingredient-details-info.js";

//объект текущего просматриваемого ингредиента
const initialState = {
  // Исходное состояние
  item: null,
};

// Добавление данных о просматриваемом в модальном окне IngredientDetails ингредиенте.
// Удаление данных о просматриваемом в модальном окне ингредиенте при закрытии модального окна.
export const ingredientDetailsInfo = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_DATA_INGREDIENTDETAILS: {
      return {
        item: action.payload,
      };
    }
    case DELETE_DATA_INGREDIENTDETAILS: {
      return {
        item: null,
      };
    }
    default: {
      return state;
    }
  }
};
