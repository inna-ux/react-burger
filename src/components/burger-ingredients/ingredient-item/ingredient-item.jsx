import React from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./ingredient-item.module.css";
import { openIngredientInfo } from "../../../services/actions/ingredient-details-info";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../../utils/prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
function BurgerIngredientItem({ ingredientData, onClick }) {
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(
    (store) => store.listIngredientsBurgerConstructor.otherIngredients
  );
  const constructorBuns = useSelector(
    (store) => store.listIngredientsBurgerConstructor.buns
  );
  const allIngredientsConstructor = [
    ...constructorIngredients,
    ...constructorBuns,
  ];
  
  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: ingredientData,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const getCounter = (state) => {
    return state.reduce(
      (acc, el) => (el._id === ingredientData._id ? ++acc : acc),
      0
    );
  };
  const count = useSelector(() => getCounter(allIngredientsConstructor));
  const handler = () => {
    onClick(true);
    dispatch(openIngredientInfo(ingredientData));
  };
  return (
    !isDrag && (
      <div
        ref={dragRef}
        onClick={handler}
        className={`${itemStyles.card__item} pb-8`}
      >
        {count === 0 ? null : <Counter count={count} size="default" />}

        <img src={ingredientData.image} alt="the ingredient" />

        <div className={`${itemStyles.price} pt-1 pb-1 `}>
          <h3 className="text text_type_digits-default">
            {ingredientData.price}
          </h3>
          <CurrencyIcon type="primary" />
        </div>

        <p className="text text_type_main-small">{ingredientData.name}</p>
      </div>
    )
  );
}

BurgerIngredientItem.propTypes = {
  ingredientData: ingredientPropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BurgerIngredientItem;
