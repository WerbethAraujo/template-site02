import React from 'react';
import styles from './Navlinks.module.sass';

const Navlinks = ({ onToggleMenu }) => {
  return (
    <ul className={styles.list}>
      <li>
        <a href='#about' onClick={onToggleMenu}>
          Sobre Nós
        </a>
      </li>
      <li>
        <a href='#testimonials' onClick={onToggleMenu}>
          Depoimentos
        </a>
      </li>
      <li>
        <a href='#location' onClick={onToggleMenu}>
          Localização
        </a>
      </li>
      <li>
        <a href='#menu' onClick={onToggleMenu}>
          Menu
        </a>
      </li>
    </ul>
  );
};

export default Navlinks;
