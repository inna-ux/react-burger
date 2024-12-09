import styles from "./info-orders.module.css";
import { useSelector } from "../../../utils/types/hook";

import { Preloader } from "../../../components/preloader/preloader";
import { useMemo } from "react";

function InfoOrders(): React.JSX.Element {
  const { total, totalToday, orders } = useSelector(
    (state) => state.wsFeedOrders
  );
  const ordersDone = useMemo(
    () => orders.filter((item) => item.status === "done").slice(0, 10),
    [orders]
  );
  const ordersWork = useMemo(
    () =>
      orders
        .filter(
          (item) => item.status === "pending" || item.status === "created"
        )
        .slice(0, 10),
    [orders]
  );

  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.block}  ml-15`}>
        <div className={`${styles.table_status}`}>
          <div className={`${styles.table_orders}`}>
            <h4 className={`text text_type_main-medium mb-6`}>Готовы:</h4>
            <ul className={`${styles.list_table_orders}`}>
              {ordersDone.map((item) => {
                return (
                  <li
                    key={item.number}
                    className={`${styles.numer__done} text text_type_digits-default`}
                  >
                    {item.number}
                  </li>
                );
              })}
              {!ordersDone.length && null}
            </ul>
          </div>
          <div className={`${styles.table_orders}`}>
            <h4 className={`text text_type_main-medium mb-6`}>В работе:</h4>
            <ul className={`${styles.list_table_orders}`}>
              {ordersWork.map((item) => {
                return (
                  <li
                    key={item.number}
                    className="text text_type_digits-default"
                  >
                    {item.number}
                  </li>
                );
              })}
              {!ordersWork.length && null}
            </ul>
          </div>
        </div>
        <div className={`${styles.result}`}>
          <h4 className={`text text_type_main-medium `}>
            Выполнено за все время:
          </h4>
          <p
            className={`${styles.result__quantity} text text_type_digits-large`}
          >
            {total}
          </p>
        </div>
        <div className={`${styles.result}`}>
          <h4 className={`text text_type_main-medium`}>
            Выполнено за сегодня:
          </h4>
          <p
            className={`${styles.result__quantity} text text_type_digits-large`}
          >
            {totalToday}
          </p>
        </div>
      </div>
      {!orders.length && <Preloader />}
    </section>
  );
}

export default InfoOrders;
