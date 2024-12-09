import styles from "./group-order-card.module.css";
import OrderCard from "./order-card/order-card";
import { TOrderType } from "../../utils/types/types";

type TOrdersFeed = {
  ordersData: Array<TOrderType>;
  path: string;
};

function GroupOrderCard({ ordersData, path }: TOrdersFeed): React.JSX.Element {
  return (
    <ul className={`${styles.group_block}`}>
      {ordersData.map((item) => (
        <li className={styles.li} key={item._id}>
          <OrderCard ordersDataItem={item} path={path} profileStatus={false} />
        </li>
      ))}
    </ul>
  );
}
export default GroupOrderCard;
