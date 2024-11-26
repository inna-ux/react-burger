import { createSelector } from "reselect";
import { TIngredient } from "../utils/types/types";

export const getAllBuns = createSelector(
  [(state) => state.listIngredients.data],
  (data) => data.filter((item: TIngredient) => item.type === "bun")
);

export const getAllMain = createSelector(
  [(state) => state.listIngredients.data],
  (data) => data.filter((item: TIngredient) => item.type === "main")
);
export const getAllSauce = createSelector(
  [(state) => state.listIngredients.data],
  (data) => data.filter((item: TIngredient) => item.type === "sauce")
);
