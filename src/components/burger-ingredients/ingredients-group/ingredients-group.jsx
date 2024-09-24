import React, { useState } from 'react';
import groupStyles from "./ingredients-group.module.css";
import BurgerIngredientItem from "../ingredient-item/ingredient-item";
import IngredientsDetails from '../../ingredient-details/ingredient-details';
import { array, string } from "prop-types";

function BurgerIngredientsGroup(props) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlerSelectData = (n) => setCurrentIndex(n);

  return (
    <>
      <h2 className="text text_type_main-medium">{props.title}</h2>
      <ul className={`${groupStyles.group_block} ml-4 mt-6 mb-2`}>
        {props.data.map((ingredient, index) => (
          <li className={groupStyles.li} key={index.toString()} onClick={() => {
            handlerSelectData(index);
            setOpen(true)
          }}
          >
            <BurgerIngredientItem ingredientData={ingredient} />

          </li>

        ))}
        <IngredientsDetails data={props.data} currentIndex={currentIndex} open={open} onClose={() => setOpen(false)} />
      </ul>
    </>
  )
}

BurgerIngredientsGroup.propTypes = {
  title: string,
  data: array,
};
export default BurgerIngredientsGroup;