import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import style from "./order-info-details.module.css";
import { TOrderType } from "../../utils/types/types";
import { useSelector } from "../../utils/types/hook";
import { Preloader } from "../preloader/preloader";
import TotalPrice from "../group-order-card/order-card/total-price/total-price";
import { useMemo } from "react";

interface IOrderInformation {
  data: Array<TOrderType> | null;
  modal?: boolean;
}

const OrderInfoDetails = ({
  data,
  modal,
}: IOrderInformation): React.JSX.Element => {
  const { id } = useParams();

  const ingredients = useSelector((store) => store.listIngredients.data);
  const currentOrder = data?.find((item) => item._id === id);

  const listOrderedIngredients = useMemo(() => {
    return currentOrder?.ingredients
      .filter((ingredient) => ingredient != null)
      .map((item) => {
        return ingredients.find((el) => el._id === item);
      });
  }, [currentOrder?.ingredients, ingredients]);
  const totalPrice = useMemo(() => {
    return listOrderedIngredients?.reduce(
      (sum, item) => (item === undefined ? 0 : sum + item.price),
      0
    );
  }, [listOrderedIngredients]);

  // const uniqueIngradients= listOrderedIngredients?.filter((value, index, array) => array.indexOf(value) === index);
  const uniqueIngradients = [...new Set(listOrderedIngredients)];
  const status =
    currentOrder?.status === "done"
      ? "Выполнен"
      : currentOrder?.status === "created"
      ? "Создан"
      : currentOrder?.status === "pending"
      ? "Готовится"
      : "";

  return (
    <>
      {!currentOrder ? (
        <Preloader />
      ) : (
        <section className={`${style.section}  mt-15`}>
          {modal ? (
            <p className={`text text_type_digits-default mb-10`}>
              #{currentOrder.number}
            </p>
          ) : (
            <p className={`${style.title} text text_type_digits-default mb-10`}>
              #{currentOrder.number}
            </p>
          )}
          <h2 className={`text text_type_main-medium  mb-3`}>
            {currentOrder.name}
          </h2>
          <p
            className="text text_type_main-default mb-15"
            style={currentOrder.status === "done" ? { color: "#00CCCC" } : {}}
          >
            {status}
          </p>

          <h3 className={`text text_type_main-medium  mb-6`}>Состав:</h3>
          <ul className={`${style.list__ingredients}`}>
            {uniqueIngradients.map((item, index) =>
              item === undefined ? null : (
                <li key={index} className={`${style.item__ingredient} mb4`}>
                  <div className={`${style.block__name__img}`}>
                    <div className={`${style.frame}`}>
                      <img
                        src={item?.image_mobile}
                        alt={item.name}
                        className={`${style.card__img}`}
                      />
                    </div>

                    <p className="text text_type_main-default mr-4 ml-4">
                      {item.name}
                    </p>
                  </div>

                  <div className={`${style.block__count__price} mr-6`}>
                    <p className="text text_type_digits-default mr-2">
                      {
                        listOrderedIngredients?.filter((el) =>
                          el === undefined ? null : el._id === item._id
                        ).length
                      }{" "}
                      x {item.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                </li>
              )
            )}
          </ul>
          <div className={`${style.block__total__date} mt-10`}>
            <p className="text text_type_main-default text_color_inactive">
              <FormattedDate date={new Date(currentOrder.createdAt)} />
            </p>

            <TotalPrice totalPrice={totalPrice} />
          </div>
        </section>
      )}
      {!data && <Preloader />}
    </>
  );
};

export default OrderInfoDetails;
