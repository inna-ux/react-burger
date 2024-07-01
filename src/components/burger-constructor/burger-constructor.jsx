import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { useMemo, useState } from "react";
  import { useGroupIngredients } from '../burger-ingredients/filter-ingredient/usegroupingredient';
  import { sum } from '../../utils/sum';
  import  OrderDetails  from '../orderdetails/order-details';
  import style from './burger-constructor.module.css';
  import { number, string } from "prop-types";

  const infoConstructor = (ingredient) => ({
    price: ingredient?.price ?? 0,
    thumbnail: ingredient?.image ?? void 0,
    text: ingredient?.name ?? "",
  });
  

export function BurgerConstructor({ chosenElements }) {
    const [isOpened, setIsOpened] = useState(false);
    const overallCost = useMemo(
      () => sum(...chosenElements.map((ingredient) => ingredient.price)),
      [chosenElements]
    );
    const {
      buns: [burgerBun],
      mains,
      sauces,
    } = useGroupIngredients(chosenElements);
    const filling = [...mains, ...sauces];
    const topBottom = {
      ...infoConstructor(burgerBun),
      isLocked: true,
    };
  
    return (
      <section className={`${style.section} mt-25 `}>
        <ul className={style.list}>
          <li className={`${style.item__top} ml-8`}>
            <ConstructorElement type="top" {...topBottom} />
          </li>
          <div className={`${style.container__item__filling}`}>
            <ul className={style.list}>
              {filling.map((ingredient) => (
                <li key={ingredient._id} className={style.card__list_item}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    {...infoConstructor(ingredient)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <li className={`${style.item__bottom}`}>
            <ConstructorElement type="bottom" {...topBottom} />
          </li>
        </ul>
        <div className={`${style.overallCost__container} mt-10`}>
          <div className={`${style.overallCost} mr-10`}>
            <p className="text text_type_digits-medium mr-3">{overallCost}</p>
            <CurrencyIcon style={{ width: "33px", height: "33px" }} type="primary" />
          </div>
          <Button
            htmlType="button"
            onClick={() => setIsOpened(true)}
            type="primary"
            size="large"
          >
            Оформить заказ
          </Button>
          {isOpened && <OrderDetails onClose={() => setIsOpened(false)} />}
        </div>
      </section>
    );
  }
  
  BurgerConstructor.propTypes = {
    price: number,
    thumbnail: string,
    text: string,
    overallCost: number,
  };