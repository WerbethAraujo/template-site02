import React from 'react';
import Image from 'next/image';

import styles from './Header.module.sass';

const Header = ({ header }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>
      <div className={styles.image}>
        <img
          src='https://cdn.sanity.io/images/jwhvy7bf/production/290512895d7a75c942f1d2a0113bea54dc2154bf-580x277.png'
          alt='banner pizza'
        />
      </div>
    </header>
  );
};

export default Header;
