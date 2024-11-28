import styles from './feed.module.css'
import OrderFeed from './order-feed/order-feed';

function Feed() {
  
  
    return (
      <>
         
          <main className={styles.main}>
            
              <OrderFeed  />
              {/* <InfoOrders /> */}
            
          </main>
       
          
       
     
        
        
      </>
    );
  }
  
  export default Feed;
  