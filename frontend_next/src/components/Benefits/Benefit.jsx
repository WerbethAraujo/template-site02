import React from 'react';
import Image from 'next/image';

import { useNextSanityImage } from 'next-sanity-image';
import client from '@/src/sanity';

import styles from './Benefit.module.sass';

const Benefit = ({ icon, title, subtitle }) => {
  const iconProps = useNextSanityImage(client, icon);

  return (
    <div className={styles.benefit}>
      <Image
        src={iconProps.src}
        alt='icone do beneficio'
        loader={iconProps.loader}
        width={56}
        height={56}
      />
      <div className={styles.content}>
        <h2>{title}</h2>
        <strong>{subtitle}</strong>
      </div>
    </div>
  );
};

export default Benefit;
