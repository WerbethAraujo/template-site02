import React from 'react';
import styles from './Menu.module.sass';
import MenuItem from './MenuItem';

const Menu = ({ menu }) => {
  const renderMenu = menu.map((item) => (
    <MenuItem
      key={item._id}
      recipe={item.recipe}
      price={item.price}
      ingredients={item.ingredients}
    />
  ));
  return (
    <section className={styles.container} id='menu'>
      <div className={styles.menu}>
        <h2 className='gold'>Menu</h2>
        <ul className={styles.list}>{renderMenu}</ul>
      </div>
    </section>
  );
};

export default Menu;
