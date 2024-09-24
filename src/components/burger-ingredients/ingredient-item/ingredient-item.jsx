import React, { useState } from 'react';
import {
    Counter,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./ingredient-item.module.css";

import { number, string } from "prop-types";

function BurgerIngredientItem({ ingredientData }) {

    const [count, setCount] = useState(0);
    const handler = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);

    }
    return (
        <>
            <div onClick={handler} className={`${itemStyles.card__item} pb-8`}>
                <Counter count={count} size="default" />
                <img src={ingredientData.image} alt="ingredient" />

                <div className={`${itemStyles.price} pt-1 pb-1 `}>
                    <h3 className='text text_type_digits-default'>{ingredientData.price}</h3>
                    <CurrencyIcon type="primary" />
                </div>

                <p className="text text_type_main-small">{ingredientData.name}</p>
            </div>
        </>
    );
}

BurgerIngredientItem.propTypes = {
    image: string,
    price: number,
    name: string,
};

export default BurgerIngredientItem; 
