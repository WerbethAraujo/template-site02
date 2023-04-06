import React, { useState } from 'react';
import Image from 'next/legacy/image';

import { GiHamburgerMenu } from 'react-icons/gi';

import styles from './Navbar.module.sass';

import Navlinks from './Navlinks';

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  function handleToggleMenu() {
    setIsShowMenu(!isShowMenu);
  }

  return (
    <section className={styles.container}>
      <div className={styles.navbar}>
        <a href='#'>
          <Image src={'/logo.png'} alt='logo' width={100} height={38} />
        </a>
        <nav className={styles.links}>
          <Navlinks />
        </nav>
        <GiHamburgerMenu className={styles.icon} onClick={handleToggleMenu} />
        <nav className={`${styles.mobile} ${isShowMenu && styles.active}`}>
          <Navlinks onToggleMenu={handleToggleMenu} />
        </nav>
        <div className={`${styles.back} ${isShowMenu && styles.active}`} />
      </div>
    </section>
  );
};

export default Navbar;
