import React from 'react';

import CardapioItem from './CardapioItem';

import styles from './Cardapio.module.sass';

const Cardapio = ({ cardapio }) => {
  const renderItems = cardapio.map((item) => (
    <CardapioItem
      key={item._id}
      image={item.image}
      category={item.category}
      title={item.title}
    />
  ));

  return (
    <section className={styles.cardapioWrapper}>
      <div className={styles.cardapio}>
        <h2 className='gold'>No Cardápio</h2>
        <div className={styles.items}>{renderItems}</div>
      </div>
    </section>
  );
};

export default Cardapio;
