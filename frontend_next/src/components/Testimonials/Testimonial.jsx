import React from 'react';
import Image from 'next/legacy/image';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import { useNextSanityImage } from 'next-sanity-image';
import styles from './Testimonial.module.sass';

import client from '../../sanity';

const Testimonial = ({ name, testimonial, image }) => {
  const imageProps = useNextSanityImage(client, image);
  console.log(imageProps);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          layout='fill'
          objectFit='contain'
        />
      </div>

      <span className={styles.name}>{name}</span>
      <p className={styles.testimonial}>
        <RiDoubleQuotesL />
        {testimonial}
        <RiDoubleQuotesR />
      </p>
    </div>
  );
};

export default Testimonial;
