import React from 'react';

import Image from 'next/legacy/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/src/sanity';

import styles from './ImageText.module.sass';

const ImageText = ({ data }) => {
  const imageProps = useNextSanityImage(client, data.image);

  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.content}>
        <span>{data.top_title}</span>
        <h2>{data.title}</h2>
        <p>{data.text}</p>

        {data.address && <strong>{data.address}</strong>}
        {data.email && <strong>{data.email}</strong>}
        {data.phone && <strong>{data.phone}</strong>}

        <a href={data.url} className='btn btn-primary'>
          {data.button} &rarr;
        </a>
      </div>
    </section>
  );
};

export default ImageText;
