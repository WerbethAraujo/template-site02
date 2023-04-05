import React from 'react';
import styles from './Navlinks.module.sass';

const Navlinks = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href='#about'>Sobre Nós</a>
      </li>
      <li>
        <a href='#testimonials'>Depoimentos</a>
      </li>
      <li>
        <a href='#location'>Localização</a>
      </li>
      <li>
        <a href='#menu'>Menu</a>
      </li>
    </ul>
  );
};

export default Navlinks;
