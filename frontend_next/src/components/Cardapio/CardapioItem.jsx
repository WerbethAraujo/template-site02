import React from 'react';
import Image from 'next/legacy/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/src/sanity';

import styles from './CardapioItem.module.sass';

const CardapioItem = ({ image, title, category }) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <div className={styles.item}>
      <Image
        src={imageProps.src}
        loader={imageProps.loader}
        width={200}
        height={200}
      />
      <h3>{category}</h3>
      <h4>{title}</h4>
    </div>
  );
};

export default CardapioItem;
