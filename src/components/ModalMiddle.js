import React from 'react';
import styles from '../styles/ModalMiddle.module.css';

export default function ModalMiddle({
  name,
  username,
  email,
  city
}) {
  return (
    <div className={styles.middle}>
      <p className={styles.name}>{name}</p>
      <p className={styles.user}>{username}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.city}>{city}</p>
    </div>
  );
}
