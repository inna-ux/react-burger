import React from 'react';
import groupStyles from "./ingredients-group.module.css";
import  BurgerIngredientItem  from "../ingredient-item/ingredient-item";
import { array, string } from "prop-types";

function BurgerIngredientsGroup({ingredientsGroup, title}) {
    return (
        <>
    <h2 className="text text_type_main-medium">{title}</h2>
    <ul className={`${groupStyles.group_block} ml-4 mt-6 mb-2`}>
      {ingredientsGroup.map(({ _id: id, ...ingredientData }) => (
        <li className={groupStyles.li} key={id}>
          <BurgerIngredientItem ingredientData={ingredientData} />
        </li>
      ))}
    </ul>
  </>
    )
}

BurgerIngredientsGroup.propTypes = {
    title: string,
    ingredientsGroup: array,
};
export default BurgerIngredientsGroup;