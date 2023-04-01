import styles from './MenuItem.module.sass';

import React from 'react';

const MenuItem = ({ recipe, ingredients, price }) => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h3>{recipe}</h3>
        <h4>{ingredients}</h4>
      </div>
      <div className={styles.divisor} />
      <h4 className={styles.price}>{price}</h4>
    </li>
  );
};

export default MenuItem;
