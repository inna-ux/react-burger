import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total-price.module.css';

type TTotalPriceProps = {
    totalPrice: number | undefined;
  }

const TotalPrice = ({ totalPrice }: TTotalPriceProps): React.JSX.Element => {

  return (
    <div className={styles.total}>
      <p className='text text_type_digits-medium'>
        {totalPrice}
      </p>
      <CurrencyIcon type='primary' />
    </div>
  );
}

TotalPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired
}

export default TotalPrice;