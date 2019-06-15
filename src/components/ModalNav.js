import React from 'react';
import styles from '../styles/ModalNav.module.css';

export default function ModalNav({
  handleModalPrev,
  handleModalNext
}) {
  return (
    <>
      <button aria-label="previous" onClick={handleModalPrev} className={styles.prev}>&lt;</button>
      <button aria-label="next" onClick={handleModalNext} className={styles.next}>&gt;</button>
    </>
  );
}
