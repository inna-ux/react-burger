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

interface IProfileOrdersPageProps {
  path: string;
}

const ProfileOrdersPage = ({
  path,
}: IProfileOrdersPageProps): React.JSX.Element => {
  const dispatch = useDispatch();
  const { authOrders } = useSelector((state) => state.authFeedOrders);

  useEffect(() => {
    dispatch(wsAuthConnectionStart(`${URL_WSS}/orders`));
    return () => {
      dispatch(wsAuthConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div className={`${styles.orders__block} mr-2`}>
      <ul className={`${styles.group_list_orders_block}  mb-4`}>
        {authOrders?.map((item) => (
          <li className={styles.li} key={item._id}>
            <OrderCard ordersDataItem={item} path={path} profileStatus={true} />
          </li>
        ))}
        {!authOrders && <Preloader />}
        {authOrders?.length === 0 && (
          <div>
            <h1>У вас нет заказов</h1>
            <Link to="/" className={styles.link}>
              Сделать заказ
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ProfileOrdersPage;
