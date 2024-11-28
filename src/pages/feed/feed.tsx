import styles from './feed.module.css'
import OrderFeed from './order-feed/order-feed';
import { useDispatch } from '../../utils/types/hook';
import { URL_WSS } from '../../utils/api';
import { wsConnectionClosed, wsConnectionStart } from '../../services/actions/websocket';
import { useEffect } from 'react';
import InfoOrders from './info-orders/info-orders';



function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsConnectionStart(`${URL_WSS}/orders/all`));
    return () => {
      dispatch(wsConnectionClosed())
    };
  }, [dispatch]);
  
  
    return (
      <>
         
          <main className={styles.main}>
            
              <OrderFeed  />
              <InfoOrders />
            
          </main>
       
          
       
     
        
        
      </>
    );
  }
  
  export default Feed;
  