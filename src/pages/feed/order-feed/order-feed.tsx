import styles from "./order-feed.module.css";
import GroupOrderCard from "../../../components/group-order-card/group-order-card";
import { useSelector } from "../../../utils/types/hook";
import { TPropsFeed } from "../feed";
import { Preloader } from "../../../components/preloader/preloader";

function OrderFeed({ path }: TPropsFeed): React.JSX.Element {
  const ordersData = useSelector((state) => state.wsFeedOrders.orders);

  return (
    <section className={`${styles.section}`}>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
        Лента заказов
      </h1>
      <div className={`${styles.ingredients__block}`}>
        <GroupOrderCard path={path} ordersData={ordersData} />
      </div>
      {!ordersData.length && <Preloader />}
    </section>
  );
}

export default OrderFeed;
