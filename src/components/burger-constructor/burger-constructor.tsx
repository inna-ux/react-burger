import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor.module.css";
import {
  addOrderitems,
  getOrderData,
} from "../../services/actions/order-number";
import {
  RESET_INGREDIENTS,
  MOVE_INGREDIENTS,
} from "../../services/actions/ingredients-constructor";
import { Modal } from "../modal/modal";
import { useDrop } from "react-dnd";
import {
  addBunsInConstructor,
  addIngridient,
} from "../../services/actions/ingredients-constructor";
import { ContentBurger } from "./content-burger";
import { TIngredient } from "../../utils/types";



function BurgerConstructor() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector((state) => state.user.user);
  
  const saucesMains = useSelector(
    // @ts-ignore
    (store) => store.listIngredientsBurgerConstructor.otherIngredients
  );
  const buns = useSelector(
    // @ts-ignore
    (store) => store.listIngredientsBurgerConstructor.buns
  );
  // @ts-ignore
  const { orderNumber } = useSelector((state) => state.createdOrder);

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: TIngredient) {
      if (item.type === "bun") {
        dispatch(addBunsInConstructor([item, item]));
      } else {
        dispatch(addIngridient(item));
      }
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  const borderColor = isHover ? "lightgreen" : "transparent";

  const moveList = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch({ type: MOVE_INGREDIENTS, dragIndex, hoverIndex });
    },
    [dispatch]
  );

  const totalCost = useMemo(() => {
    let total = 0;
    saucesMains.map((item: TIngredient) => {
      return (total = total + item.price);
    });
    buns.map((item: TIngredient) => {
      return (total = total + item.price);
    });
    return total;
  }, [saucesMains, buns]);

  const onClose = () => {
    setOpen(false);
    dispatch({ type: RESET_INGREDIENTS });
  };
  const onClick = () => {
    if (!user) {
       return (navigate('/login'))
    } else {
      const orderArray = [buns._id]
        .concat(saucesMains.map((item: TIngredient) => item._id))
        .concat([buns._id]);
      dispatch(addOrderitems(orderArray));
      // @ts-ignore
      dispatch(getOrderData(orderArray));
      setOpen(true);
    }
  };

  const [active, setActive] = useState(true);

  useEffect(() => {
    if (buns.length === 0 || saucesMains.length === 0) {
      setActive(true);
    } else if (buns.length > 0 && saucesMains.length > 0) {
      setActive(false);
    }
  }, [buns, saucesMains]);

  return (
    <section ref={dropTarget} className={`${style.section} pt-25 pl-10 pb-10 `}>
      <ul className={`${style.list_main}  pl-4 pr-4  `}>
        <li className={`${style.item__top} ml-8 pr-4 mb-4`}>
          {buns.length === 0 ? (
            <div
              style={{ borderColor }}
              className={`${style.block}  ${style.bunTop} `}
            >
              <span className={`${style.title} text text_type_main-default `}>
                Выберите булки
              </span>
            </div>
          ) : (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${buns[0].name} (верх)`}
              price={buns[0].price}
              thumbnail={buns[0].image}
            />
          )}
        </li>

        <div className={`${style.container__item__filling} pr-2`}>
          {saucesMains.length === 0 ? (
            <div
              style={{ borderColor }}
              className={`${style.block} ${style.saucesMains}  `}
            >
              <span className={`${style.title} text text_type_main-default `}>
                Выберите начинку
              </span>
            </div>
          ) : (
            <ul className={style.list}>
              {saucesMains.map((item: TIngredient, index: number) => (
                <li key={item.id} className={style.card__list_item}>
                  <DragIcon type="primary" />
                  <ContentBurger
                    item={item}
                    index={index}
                    moveList={moveList}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        <li className={`${style.item__bottom} ml-8 pr-4 mt-4`}>
          {buns.length === 0 ? (
            <div
              style={{ borderColor }}
              className={`${style.block} ${style.bunBottom} `}
            >
              <span className={`${style.title} text text_type_main-default `}>
                Выберите булки
              </span>
            </div>
          ) : (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${buns[0].name} (низ)`}
              price={buns[0].price}
              thumbnail={buns[0].image}
            />
          )}
        </li>
      </ul>
      <div className={`${style.full_price_container} mt-10`}>
        <div className={`${style.full_price} mr-10`}>
          <p className="text text_type_digits-medium mr-3">{totalCost}</p>
          <CurrencyIcon
            type="primary"
          />
        </div>
        <Button
          disabled={active}
          htmlType="button"
          type="primary"
          size="large"
          onClick={onClick}
        >
          Оформить заказ
        </Button>

        {open && orderNumber > 0 && (
          <Modal title={""} onClose={onClose}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </section>
  );
}

export default BurgerConstructor;
