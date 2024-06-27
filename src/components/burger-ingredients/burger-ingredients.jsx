import React from 'react';
import IngredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsGroup from './ingredients-group/ingredients-group';
import   { useGroupIngredients }  from './filter-ingredient/usegroupingredient'


 function BurgerIngredients({ ingredients }) {
  const { buns, mains, sauces } = useGroupIngredients(ingredients);
    const [current, setCurrent] = React.useState('bun');
    
    return (
      <section className={`${IngredientsStyles.section}`}>
        <h1 className={`${IngredientsStyles.title}text text_type_main-large mt-10 mb-5`}>
          Соберите бургер
        </h1>
        <div className={`${IngredientsStyles.Tabs} mb-10`}>
          <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="filling" active={current === "filling"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={IngredientsStyles.ingredients__block}>
          <BurgerIngredientsGroup ingredientsGroup={buns} title="Булки" />
          <BurgerIngredientsGroup ingredientsGroup={sauces} title="Соусы" />
          <BurgerIngredientsGroup ingredientsGroup={mains} title="Начинки" />
        </div>
      </section>
    );
  }

  export default BurgerIngredients;