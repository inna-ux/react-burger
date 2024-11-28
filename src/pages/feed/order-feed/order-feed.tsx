import styles from './order-feed.module.css';
import GroupOrderCard from '../../../components/group-order-card/group-order-card';
import { useDispatch, useSelector } from '../../../utils/types/hook';
import { URL_WSS } from '../../../utils/api';
import { wsConnectionClosed, wsConnectionStart } from '../../../services/actions/websocket';
import { useEffect } from 'react';
import { Preloader } from '../../../components/preloader/preloader';


function OrderFeed (): React.JSX.Element {
  const dispatch = useDispatch();
  const ordersData = useSelector(state => state.wsFeedOrders.orders);

  useEffect(() => {
    dispatch(wsConnectionStart(`${URL_WSS}/orders/all`));
    return () => {
      dispatch(wsConnectionClosed())
    };
  }, [dispatch]);
    return (
        <section className={`${styles.section}`}>
             <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
       Лента заказов
      </h1>
      <div className={`${styles.ingredients__block}`}>
        <GroupOrderCard ordersData={ ordersData} />

      </div>
      {!ordersData.length && <Preloader />}

        </section>
    )
}

export default OrderFeed;