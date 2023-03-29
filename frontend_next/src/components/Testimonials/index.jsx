import React from 'react';
import Testimonial from './Testimonial';
import styles from './Testimonials.module.sass';

const Testimonials = ({ testimonials }) => {
  const renderTestimonial = testimonials.map((testimonial) => (
    <Testimonial
      key={testimonial._id}
      image={testimonial.image}
      name={testimonial.name}
      testimonial={testimonial.testimonial}
    />
  ));
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <span>Depoimentos</span>
        <h2>Dos nossos clientes</h2>
      </div>
      <div className={styles.testimonials}>{renderTestimonial}</div>
    </section>
  );
};

export default Testimonials;
