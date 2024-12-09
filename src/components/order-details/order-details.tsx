import { useSelector } from "../../utils/types/hook";
import graphics from "../../images/graphics.svg";

import style from "./order-details.module.css";

function OrderDetails() {
  const orderNumber = useSelector((state) => state.createdOrder.orderNumber);

  return (
    <>
      <p
        className={`${style.order__number} text text_type_digits-large  mb-8 ml-15 mr-15`}
      >
        {orderNumber}
      </p>
      <p className="text text_type_main-medium mb-15 ">идентификатор заказа</p>
      <img
        src={graphics}
        alt="Your order has started to be prepared. Wait for readiness at the orbital station."
        className={style.img}
      />
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-20">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}

export default OrderDetails;
