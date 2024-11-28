import styles from './group-order-card.module.css';
import OrderCard from './order-card/order-card';
import { TOrderType } from '../../utils/types/types';

type TOrdersFeed = {
  ordersData: Array<TOrderType>
}

function GroupOrderCard({ ordersData }: TOrdersFeed): React.JSX.Element {
 
  
return (
  
    <ul className={`${styles.group_block}  mb-4`}>
    {ordersData.map((item) => (
      <li className={styles.li} key={item._id} >
        <OrderCard ordersDataItem={item} profileStatus={false} />
      </li>
    ))}
  </ul>
 
)
}
export default GroupOrderCard;