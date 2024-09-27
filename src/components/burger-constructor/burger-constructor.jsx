import React, { useState, useMemo } from "react";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../utils/prop-types";

function BurgerConstructor(props) {
  const [open, setOpen] = useState(false);

  const buns = useMemo(
    () => props.data.filter((item) => item.type === "bun"),
    [props.data]
  );
  const saucesMains = useMemo(
    () =>
      props.data.filter(
        (item) => item.type === "sauce" || item.type === "main"
      ),
    [props.data]
  );

  const totalCost = saucesMains.reduce((prev, item) => {
    return prev + item.price;
  }, 0);

  return (
    <section className={`${style.section} pt-25 pl-10 pb-10 `}>
      <ul className={`${style.list_main} pl-4 pr-4  `}>
        <li className={`${style.item__top} ml-8 pr-4 mb-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${buns[0].name} (верх)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        </li>

        <div className={`${style.container__item__filling} pr-2`}>
          <ul className={style.list}>
            {saucesMains.map((item, index) => (
              <li key={index.toString()} className={style.card__list_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            ))}
          </ul>
        </div>

        <li className={`${style.item__bottom} ml-8 pr-4 mt-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${buns[0].name} (низ)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        </li>
      </ul>
      <div className={`${style.full_price_container} mt-10`}>
        <div className={`${style.full_price} mr-10`}>
          <p className="text text_type_digits-medium mr-3">{totalCost}</p>
          <CurrencyIcon
            style={{ width: "33px", height: "33px" }}
            type="primary"
          />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => setOpen(true)}
        >
          Оформить заказ
        </Button>
        {open && <OrderDetails onClose={() => setOpen(false)} />}
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
export default BurgerConstructor;
