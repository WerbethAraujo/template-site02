import React from 'react';
import styles from './Navbar.module.sass';

import Navlinks from './Navlinks';

const Navbar = () => {
  return (
    <section>
      <a href='#'>
        <img src='/logo.png' alt='logo' />
      </a>
      <Navlinks />
    </section>
  );
};

export default Navbar;
