import React from "react";
import IngredientsStyles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsGroup from "./ingredients-group/ingredients-group";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import IngredientsDetails from "../ingredient-details/ingredient-details";
// import { Modal } from "../modal/modal";
// import { closeIngredientInfo } from "../../services/actions/ingredient-details-info";
import { useSelector } from "../../utils/types/hook";
import { getAllBuns, getAllSauce, getAllMain } from "../../services/selectors";

function BurgerIngredients() {
  const [current, setCurrent] = useState("buns");

  // const [modalActive, setModalActive] = useState(false);
  // const dispatch = useDispatch();
  // const onClose = () => {
  //   setModalActive(false);
  //   dispatch(closeIngredientInfo());
  // };

  const buns = useSelector(getAllBuns);
  const mains = useSelector(getAllMain);
  const sauces = useSelector(getAllSauce);

  function handleButtonClick(tab: string) {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  const [bunsRef, bunsInView] = useInView({ threshold: 0 });
  const [sausesRef, sausesInView] = useInView({ threshold: 0 });
  const [mainRef, mainInView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (bunsInView) {
      setCurrent("buns");
    } else if (sausesInView) {
      setCurrent("sauces");
    } else if (mainInView) {
      setCurrent("main");
    }
  }, [bunsInView, sausesInView, mainInView]);

  return (
    <section className={`${IngredientsStyles.section}`}>
      <h1
        className={`${IngredientsStyles.title} text text_type_main-large mt-10 mb-5`}
      >
        Соберите бургер
      </h1>
      <div className={`${IngredientsStyles.Tabs} mb-10`}>
        <Tab
          value="buns"
          active={current === "buns"}
          onClick={() => handleButtonClick("buns")}
        >
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={current === "sauces"}
          onClick={() => handleButtonClick("sauces")}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={() => handleButtonClick("main")}
        >
          Начинки
        </Tab>
      </div>

      <div className={IngredientsStyles.ingredients__block}>
        <BurgerIngredientsGroup
          innerRef={bunsRef}
          titleId={"buns"}
          data={buns}
          title="Булки"
          // onClick={setModalActive}
        />
        <BurgerIngredientsGroup
          innerRef={sausesRef}
          titleId={"sauces"}
          data={sauces}
          title="Соусы"
          // onClick={setModalActive}
        />
        <BurgerIngredientsGroup
          innerRef={mainRef}
          titleId={"main"}
          data={mains}
          title="Начинки"
          // onClick={setModalActive}
        />
      </div>

      {/* {modalActive && (
        <Modal title={"Детали ингредиента"} onClose={onClose}>
          <IngredientsDetails />
        </Modal>
      )} */}
    </section>
  );
}

export default BurgerIngredients;
