import React from "react";
import groupStyles from "./ingredients-group.module.css";
import BurgerIngredientItem from "../ingredient-item/ingredient-item";
import { TIngredient } from "../../../utils/types/types";

type TIngredientBoxProps = {
  data: TIngredient[];
  innerRef: any;
  title: string;
  titleId: any;
};

function BurgerIngredientsGroup(props: TIngredientBoxProps): React.JSX.Element {
  return (
    <>
      <h2
        ref={props.innerRef}
        id={props.titleId}
        className="text text_type_main-medium"
      >
        {props.title}
      </h2>
      <ul data-cy="ingredient" className={`${groupStyles.group_block} ml-4 mt-6 mb-2`}>
        {props.data.map((ingredient, index) => (
          <li className={groupStyles.li} key={index.toString()}>
            <BurgerIngredientItem ingredientData={ingredient} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default BurgerIngredientsGroup;
