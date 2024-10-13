import { createSelector } from "reselect";

export const getAllBuns = createSelector(
  [(state) => state.listIngredients.data],
  (data) => data.filter((item) => item.type === "bun")
);

export const getAllMain = createSelector(
  [(state) => state.listIngredients.data],
  (data) => data.filter((item) => item.type === "main")
);
export const getAllSauce = createSelector(
  [(state) => state.listIngredients.data],
  (data) => data.filter((item) => item.type === "sauce")
);
