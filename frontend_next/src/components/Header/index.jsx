import React from 'react';

import styles from './Header.module.sass';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Ducca Massas - A Melhor da cidade</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem
          earum sequi voluptatibus praesentium quisquam et corrupti obcaecati
          debitis porro, harum in nemo nobis similique suscipit maxime incidunt
          delectus qui?
        </p>
      </div>
      <div className={styles.image}></div>
    </header>
  );
};

export default Header;
