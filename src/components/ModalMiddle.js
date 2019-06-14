import React from 'react';
import styles from '../styles/Modal.module.css';

export default function ModalMiddle(props) {
  return (
    <div className={styles.middle}>
      <p className={styles.name}>{props.name || ''}</p>
      <p className={styles.user}>{props.username || ''}</p>
      <p className={styles.email}>{props.email || ''}</p>
      <p className={styles.city}>{props.city || ''}</p>
    </div>
  );
}
