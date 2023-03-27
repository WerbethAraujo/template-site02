import React from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/legacy/image';

import client from '@/src/sanity';

import styles from './Header.module.sass';

const Header = ({ header }) => {
  const imageProps = useNextSanityImage(client, header.image);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={imageProps.src}
          objectFit='contain'
          layout='fill'
          loader={imageProps.loader}
          alt='banner pizza'
        />
      </div>
    </header>
  );
};

export default Header;
