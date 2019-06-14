import React from 'react';
import styles from '../styles/ModalNav.module.css';

export default function ModalNav(props) {
  return (
    <>
      <button aria-label="previous" onClick={props.handleModalPrev} className={styles.prev}>&lt;</button>
      <button aria-label="next" onClick={props.handleModalNext} className={styles.next}>&gt;</button>
    </>
  );
}
