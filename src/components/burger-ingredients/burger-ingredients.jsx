import React from "react";
import IngredientsStyles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsGroup from "./ingredients-group/ingredients-group";
import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import IngredientsDetails from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";
import { ingredientPropTypes } from "../../utils/prop-types";

function BurgerIngredients(props) {
  const [current, setCurrent] = useState("bun");
  const [currentIngredient, setCurrentIngredient] = useState(null);

  const buns = useMemo(
    () => props.data.filter((item) => item.type === "bun"),
    [props.data]
  );
  const mains = useMemo(
    () => props.data.filter((item) => item.type === "main"),
    [props.data]
  );
  const sauces = useMemo(
    () => props.data.filter((item) => item.type === "sauce"),
    [props.data]
  );

  return (
    <section className={`${IngredientsStyles.section}`}>
      <h1
        className={`${IngredientsStyles.title}text text_type_main-large mt-10 mb-5`}
      >
        Соберите бургер
      </h1>
      <div className={`${IngredientsStyles.Tabs} mb-10`}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="filling"
          active={current === "filling"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
      <div className={IngredientsStyles.ingredients__block}>
        <BurgerIngredientsGroup
          data={buns}
          title="Булки"
          onClick={setCurrentIngredient}
        />
        <BurgerIngredientsGroup
          data={mains}
          title="Соусы"
          onClick={setCurrentIngredient}
        />
        <BurgerIngredientsGroup
          data={sauces}
          title="Начинки"
          onClick={setCurrentIngredient}
        />
      </div>

      {currentIngredient && (
        <Modal
          title={"Детали ингредиента"}
          onClose={() => setCurrentIngredient(null)}
        >
          <IngredientsDetails ingredient={currentIngredient} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};

export default BurgerIngredients;
