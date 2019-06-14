import React from 'react';
import styles from '../styles/Modal.module.css';

export default function ModalBottom(props) {
  return (
    <div className={styles.bottom}>
      <p>{props.cell || ''}</p>
      <p className={styles.addy}>{`${props.street}, ${props.city}, ${props.state}, USA ${props.postcode}` || ''}</p>
      <p>{`Birthday: ${props.month}/${props.day}/${props.year}` || ''}</p>
    </div>
  );
}
