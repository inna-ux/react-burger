import React from "react";
import groupStyles from "./ingredients-group.module.css";
import BurgerIngredientItem from "../ingredient-item/ingredient-item";
import PropTypes from "prop-types";

import { ingredientPropTypes } from "../../../utils/prop-types";

function BurgerIngredientsGroup(props) {
  return (
    <>
      <h2
        ref={props.innerRef}
        id={props.titleId}
        className="text text_type_main-medium"
      >
        {props.title}
      </h2>
      <ul className={`${groupStyles.group_block} ml-4 mt-6 mb-2`}>
        {props.data.map((ingredient, index) => (
          <li className={groupStyles.li} key={index.toString()}>
            <BurgerIngredientItem
              ingredientData={ingredient}
              onClick={props.onClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

BurgerIngredientsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default BurgerIngredientsGroup;
