import { ingredientDetailsInfo, initialState } from "./ingredient-details-info";
import {
  ADDING_DATA_INGREDIENTDETAILS,
  DELETE_DATA_INGREDIENTDETAILS,
  TDataIngredientDetailsActions,
} from "../actions/ingredient-details-info";
import { TIngredient } from "../../utils/types/types";


const item: TIngredient = {
  _id: "60666c42cc7b410027a1a9b1",
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

describe("Redux store and actions", () => {
  it("should return the initial state", () => {
    expect(
      ingredientDetailsInfo(undefined, {} as TDataIngredientDetailsActions)
    ).toEqual(initialState);
  });
  it("adding ingredient info", () => {
    const action = { type: ADDING_DATA_INGREDIENTDETAILS, payload: item };
    const state = ingredientDetailsInfo(initialState, action);
    expect(state).toEqual({ item: item });
  });
  it("delete ingredient info", () => {
    const action = { type: DELETE_DATA_INGREDIENTDETAILS };
    const state = ingredientDetailsInfo(initialState, action);
    expect(state).toStrictEqual(initialState);
  });
});
