import React, { useState } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./ingredient-item.module.css";

import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../../utils/prop-types";

function BurgerIngredientItem({ ingredientData, onClick }) {
  const [count, setCount] = useState(1);
  const handler = () => {
    onClick(ingredientData);
  };
  return (
    <div onClick={handler} className={`${itemStyles.card__item} pb-8`}>
      <Counter count={count} size="default" />
      <img src={ingredientData.image} alt="the ingredient" />

      <div className={`${itemStyles.price} pt-1 pb-1 `}>
        <h3 className="text text_type_digits-default">
          {ingredientData.price}
        </h3>
        <CurrencyIcon type="primary" />
      </div>

      <p className="text text_type_main-small">{ingredientData.name}</p>
    </div>
  );
}

BurgerIngredientItem.propTypes = {
  ingredientData: ingredientPropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BurgerIngredientItem;
