import { useEffect } from "react";
import style from "./order.module.css";
import OrderInfoDetails from "../../components/order-info-details/order-info-details";
import { useDispatch } from "../../utils/types/hook";
import {
  wsConnectionStart,
  wsConnectionClosed,
} from "../../services/actions/websocket";
import {
  wsAuthConnectionStart,
  wsAuthConnectionClosed,
} from "../../services/actions/websocket-aurth";
import { URL_WSS } from "../../utils/api";
import { TOrderType } from "../../utils/types/types";
import { Preloader } from "../../components/preloader/preloader";

interface IOrder {
  data: Array<TOrderType> | null;
  profile: boolean;
}

const Order = ({ data, profile }: IOrder): React.JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (profile) {
      dispatch(wsAuthConnectionStart(`${URL_WSS}/orders`));
      return () => {
        dispatch(wsAuthConnectionClosed());
      };
    } else {
      dispatch(wsConnectionStart(`${URL_WSS}/orders/all`));
      return () => {
        dispatch(wsConnectionClosed());
      };
    }
  }, [dispatch, profile]);

  return (
    <section className={`${style.full_page}`}>
      <OrderInfoDetails data={data} modal={false} />
      {!data?.length && <Preloader />}
    </section>
  );
};

export default Order;
