import styles from './order-feed.module.css';
import GroupOrderCard from '../../../components/group-order-card/group-order-card';
import {  useSelector } from '../../../utils/types/hook';

import { Preloader } from '../../../components/preloader/preloader';


function OrderFeed (): React.JSX.Element {

  const ordersData = useSelector(state => state.wsFeedOrders.orders);

 
    return (
        <section className={`${styles.section}`}>
             <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
       Лента заказов
      </h1>
      <div className={`${styles.ingredients__block} mr-2`}>
        <GroupOrderCard ordersData={ ordersData} />

      </div>
      {!ordersData.length && <Preloader />}

        </section>
    )
}

export default OrderFeed;