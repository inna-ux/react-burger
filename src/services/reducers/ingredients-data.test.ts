import { ingredientsData, initialState } from "./ingredients-data";
import {
  GET_INGREDIENTS_DATA_ERROR,
  GET_INGREDIENTS_DATA_LOADING,
  GET_INGREDIENTS_DATA_SUCCESS,
  TIngredientsDataActions,
} from "../actions/ingredients-data";
import { TIngredient } from "../../utils/types/types";


const ingredient: TIngredient = {
  _id: "643d69a5c3f7b9001cfa0943",
  name: "Соус фирменный Space Sauce",
  type: "sauce",
  proteins: 50,
  fat: 22,
  carbohydrates: 11,
  calories: 14,
  price: 80,
  image: "https://code.s3.yandex.net/react/code/sauce-04.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
};
const ingredient1: TIngredient = {
  _id: "643d69a5c3f7b9001cfa0946",
  name: "Хрустящие минеральные кольца",
  type: "main",
  proteins: 808,
  fat: 689,
  carbohydrates: 609,
  calories: 986,
  price: 300,
  image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
  image_mobile:
    "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
  id: "ingr1",
};
const ingredient2: TIngredient = {
  _id: "643d69a5c3f7b9001cfa0947",
  name: "Плоды Фалленианского дерева",
  type: "main",
  proteins: 20,
  fat: 5,
  carbohydrates: 55,
  calories: 77,
  price: 874,
  image: "https://code.s3.yandex.net/react/code/sp_1.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
  id: "ingr2",
};

describe("Redux store and actions", () => {
  it("should return the initial state", () => {
    expect(ingredientsData(undefined, {} as TIngredientsDataActions)).toEqual(
      initialState
    );
  });
  it("get ingredient data loading", () => {
    const action = { type: GET_INGREDIENTS_DATA_LOADING };
    const state = ingredientsData(initialState, action);
    expect(state).toEqual({ ...initialState, loading: true });
  });
  it("get ingredient data success", () => {
    const action = {
      type: GET_INGREDIENTS_DATA_SUCCESS,
      payload: [ingredient, ingredient1, ingredient2],
    };
    const state = ingredientsData(initialState, action);
    expect(state).toEqual({
      ...initialState,
      data: [ingredient, ingredient1, ingredient2],
    });
  });
  it("get ingredient data error", () => {
    const action = { type: GET_INGREDIENTS_DATA_ERROR, payload: "Error" };
    const state = ingredientsData(initialState, action);
    expect(state).toEqual({ ...initialState, error: "Error" });
  });
});
