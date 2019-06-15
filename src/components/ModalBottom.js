import React from 'react';
import styles from '../styles/ModalBottom.module.css';

export default function ModalBottom({
  cell,
  street,
  city,
  state,
  postcode,
  month,
  day,
  year
}) {
  return (
    <div className={styles.bottom}>
      <p>{cell}</p>
      <p className={styles.addy}>{`${street}, ${city}, ${state}, USA ${postcode}`}</p>
      <p>{`Birthday: ${month}/${day}/${year}`}</p>
    </div>
  );
}
