import React from 'react';
import Benefit from './Benefit';

import styles from './Benefits.module.sass';

const Benefts = ({ benefits }) => {
  const { icon: icon1, title: title1, subtitle: subtitle1 } = benefits[0];
  const { icon: icon2, title: title2, subtitle: subtitle2 } = benefits[1];
  const { icon: icon3, title: title3, subtitle: subtitle3 } = benefits[2];
  return (
    <section className={styles.benefits}>
      <div className={styles.top}>
        <Benefit icon={icon1} title={title1} subtitle={subtitle1} />
        <Benefit icon={icon2} title={title2} subtitle={subtitle2} />
      </div>
      <div className={styles.bottom}>
        <Benefit icon={icon3} title={title3} subtitle={subtitle3} />
      </div>
    </section>
  );
};

export default Benefts;
