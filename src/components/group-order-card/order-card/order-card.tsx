import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css';
import { TOrderType } from '../../../utils/types/types';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../utils/types/hook';
import TotalPrice from './total-price/total-price';
import { useMemo } from 'react';
import { addCurrentOrderInfo } from '../../../services/actions/current-order'; 


type TOrderCard = {
  ordersDataItem: TOrderType;
    profileStatus: boolean
   }

  const OrderCard = ({ ordersDataItem, profileStatus }: TOrderCard): React.JSX.Element => {
    const location = useLocation();
    const dispatch = useDispatch();
    const ingredients = useSelector(store => store.listIngredients.data);
    
   
    const orderIdList = ordersDataItem.ingredients;

  const listOrderedIngredients = orderIdList.map(item => {
    return ingredients.find(el => el._id === item)
  });
  const totalPrice = useMemo(() => {
    return (
      listOrderedIngredients.reduce((sum, item) => (item === undefined ? 0 : sum + item.price), 0)
    )
  }, [listOrderedIngredients])
  const count = useMemo(() =>
    listOrderedIngredients.length > 6 ? (listOrderedIngredients.length - 6) : 0
    , [listOrderedIngredients]);

    function handleClick() {
        dispatch(addCurrentOrderInfo(ordersDataItem));
      }
    
      const statusOrder =
      (ordersDataItem.status === 'created') ? (<p className={`text text_type_main-default mt-2`}>Создан</p>) :
        (ordersDataItem.status === 'pending') ? (<p className={`text text_type_main-default mt-2`}>Готовится</p>) :
          (ordersDataItem.status === 'done') ? (<p className={`text text_type_main-default text_color_success mt-2`}>Выполнен</p>) : null

    return (
        <Link to={`/feed/${ordersDataItem._id}`} state={{ background: location }} className={`${styles.orderCard}`} onClick={handleClick}>
            <div className={`${styles.info} mt-6 mb-6`}>
                <p className={`${styles.number} text text_type_digits-default`}>#{ordersDataItem.number}</p>
                <p className={`${styles.date} text text_type_main-default text_color_inactive`}><FormattedDate date={new Date(ordersDataItem.createdAt)} /></p>
            </div>
          
            <h4 className={`${styles.name} text text_type_main-medium mb-6`}>{ordersDataItem.name}</h4>

          {profileStatus ? (statusOrder) : (null)}

          <div  className={`${styles.info} mb-6`}>
             <div className={`${styles.ingredients}`}>
             <ul className={`${styles.icon__ingredients}`}>
                 {listOrderedIngredients.slice(0, 6).map((item, index) => {
                  return (<li key={index} className={`${styles.card}`} style={{ zIndex: 6 - index }}><img src={item?.image_mobile} className={styles.card__img} alt={item?.name} /></li>)
                 })}
                 {(count) ? (<div className={`${styles.card__count} text text_type_main-default`}>+{count}</div>) : null}
              </ul>  
             </div>
             <div className={`${styles.total}`}>
                 <TotalPrice totalPrice={totalPrice} />
             </div>
          </div>
         
        </Link>
    );

  }

  export default OrderCard;