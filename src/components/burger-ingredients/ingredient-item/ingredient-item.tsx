import React from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./ingredient-item.module.css";
import { openIngredientInfo } from "../../../services/actions/ingredient-details-info";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { TIngredient } from "../../../utils/types";

type TBurgerIngredientItemProps = {
  ingredientData: TIngredient;
};

function BurgerIngredientItem({
  ingredientData,
}: TBurgerIngredientItemProps): React.JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();

  const constructorIngredients = useSelector(
    // @ts-ignore
    (store) => store.listIngredientsBurgerConstructor.otherIngredients
  );
  const constructorBuns = useSelector(
    // @ts-ignore
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
  const getCounter = (state: any[]) => {
    return state.reduce(
      (acc: number, el: { _id: string }) =>
        el._id === ingredientData._id ? ++acc : acc,
      0
    );
  };
  const count = useSelector(() => getCounter(allIngredientsConstructor));
  const handler = () => {
    dispatch(openIngredientInfo(ingredientData));
  };
  return (
    <>
      {!isDrag && (
        <Link
          to={`/ingredients/${ingredientData._id}`}
          state={{ background: location }}
          ref={dragRef}
          onClick={handler}
          className={`${itemStyles.card__item} pb-8`}
        >
          {count === 0 ? null : <Counter count={count} size="default" />}

          <img src={ingredientData.image} alt="the ingredient" />

          <div className={`${itemStyles.price} pt-1 pb-1 `}>
            <h3 className="text text_type_digits-default ">
              {ingredientData.price}
            </h3>
            <CurrencyIcon type="primary" />
          </div>

          <p className="text text_type_main-small ">{ingredientData.name}</p>
        </Link>
      )}
    </>
  );
}

export default BurgerIngredientItem;
