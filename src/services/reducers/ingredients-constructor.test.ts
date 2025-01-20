import {
  listIngredientsConstructor,
  initialState,
} from "./ingredients-constructor";
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENTS,
  RESET_INGREDIENTS,
  ADD_BUNS,
  TIngrediensConstructorActions,
} from "../actions/ingredients-constructor";
import { TIngredient } from "../../utils/types/types";


const bun: TIngredient = {
  _id: "643d69a5c3f7b9001cfa093c",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
};
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
  id: "5f08dee4-fc65-4c2c-a535-ac0e3b1d4928",
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
    expect(
      listIngredientsConstructor(undefined, {} as TIngrediensConstructorActions)
    ).toEqual(initialState);
  });
  it("add buns", () => {
    const action = { type: ADD_BUNS, payload: [bun, bun] };
    const state = listIngredientsConstructor(initialState, action);
    expect(state).toStrictEqual({ ...initialState, buns: [bun, bun] });
  });
  it("add ingridient", () => {
    const action = { type: ADD_INGREDIENT, payload: ingredient };
    const state = listIngredientsConstructor(initialState, action);
    expect(state).toEqual({
      ...initialState,
      otherIngredients: [...initialState.otherIngredients, { ...ingredient }],
    });
  });

  it("delete ingredient", () => {
    const prevState = { ...initialState, otherIngredients: [ingredient] };
    const action = { type: DELETE_INGREDIENT, item: ingredient };
    const state = listIngredientsConstructor(prevState, action);
    expect(state).toEqual({
      ...initialState,
      otherIngredients: [...state.otherIngredients],
    });
  });
  it("resete ingredient", () => {
    const prevState = {
      ...initialState,
      otherIngredients: [ingredient],
      buns: [bun, bun],
    };
    const action = { type: RESET_INGREDIENTS };
    const state = listIngredientsConstructor(prevState, action);
    expect(state).toStrictEqual(initialState);
  });
  it("move ingredient", () => {
    const prevState = {
      ...initialState,
      otherIngredients: [ingredient1, ingredient2],
    };
    const action = {
      type: MOVE_INGREDIENTS,
      item: ingredient,
      dragIndex: 0,
      hoverIndex: 1,
    };
    const listItems = [ingredient2, ingredient1];
    const state = listIngredientsConstructor(prevState, action);
    expect(state).toEqual({ ...initialState, otherIngredients: listItems });
  });
});
