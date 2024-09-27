import { bool, func, node } from "prop-types";
import done from "../../images/done.svg";
import { Modal } from "../modal/modal";
import style from "./order-details.module.css";

function OrderDetails({ onClose, children, open }) {
  return (
    <Modal children={children} open={open} onClose={onClose}>
      <p
        className={`${style.order__number} text text_type_digits-large  mb-8 ml-25 mr-25`}
      >
        034536
      </p>
      <p className="text text_type_main-medium mb-15 ">идентификатор заказа</p>
      <img
        src={done}
        alt="Your order has started to be prepared. Wait for readiness at the orbital station."
        className={style.img}
      />
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </Modal>
  );
}

OrderDetails.propTypes = {
  onClose: func,
  open: bool,
  children: node,
};

export default OrderDetails;
