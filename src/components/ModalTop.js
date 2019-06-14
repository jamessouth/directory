import React from 'react';
import ModalNav from './ModalNav';
import styles from '../styles/ModalTop.module.css';

export default function ModalTop(props) {
  return (
    <>
      <button autoFocus aria-label="close" onClick={props.handleModalClose} className={styles.close}>x</button>
      {
        !props.sing && <ModalNav handleModalPrev={props.handleModalPrev} handleModalNext={props.handleModalNext}></ModalNav>
      }
      <img className={styles.img} src={props.photo} alt="employee" />
    </>
  );
}
