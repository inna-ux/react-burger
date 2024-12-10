import OrderCard from "../../../components/group-order-card/order-card/order-card";
import styles from "./profile-orders-page.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "../../../utils/types/hook";
import {
  wsAuthConnectionClosed,
  wsAuthConnectionStart,
} from "../../../services/actions/websocket-aurth";
import { URL_WSS } from "../../../utils/api";
import { Preloader } from "../../../components/preloader/preloader";
import { Link } from "react-router-dom";
import { checkUserAuth } from "../../../services/actions/user/set-user";

interface IProfileOrdersPageProps {
  path: string;
}

const ProfileOrdersPage = ({
  path,
}: IProfileOrdersPageProps): React.JSX.Element => {
  const dispatch = useDispatch();
  const { authOrders } = useSelector((state) => state.authFeedOrders);

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);

  useEffect(() => {
    dispatch(wsAuthConnectionStart(`${URL_WSS}/orders`));
    return () => {
      dispatch(wsAuthConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div className={`${styles.orders__block} `}>
      <ul className={`${styles.group_list_orders_block} `}>
        {authOrders?.map((item) => (
          <li className={styles.li} key={item._id}>
            <OrderCard ordersDataItem={item} key={item._id} path={path} profileStatus={true} />
          </li>
        )).reverse()}
      </ul>
       {!authOrders && <Preloader />}
        {authOrders?.length === 0 && (
          <div>
            <h1>У вас нет заказов</h1>
            <Link to="/" className={styles.link}>
              Сделать заказ
            </Link>
          </div>
        )}
    </div>
  );
};

export default ProfileOrdersPage;
