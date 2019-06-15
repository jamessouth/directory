import React from 'react';
import ModalTop from './ModalTop';
import ModalMiddle from './ModalMiddle';
import ModalBottom from './ModalBottom';
import styles from '../styles/Modal.module.css';

export default function Modal({
  handleModalPrev,
  handleModalNext,
  handleModalClose,
  emp,
  sing
}) {
  return (
    <div aria-live="polite" onKeyUp={handleModalClose} className={styles.hidden}>

      <ModalTop
        handleModalPrev={handleModalPrev}
        handleModalNext={handleModalNext}
        handleModalClose={handleModalClose}
        photo={emp.photo}
        sing={sing}
      />

      <ModalMiddle
        name={emp.name}
        username={emp.username}
        email={emp.email}
        city={emp.city}
      />

      <ModalBottom
        cell={emp.cell}
        street={emp.street}
        city={emp.city}
        state={emp.state}
        postcode={emp.postcode}
        month={emp.month}
        day={emp.day}
        year={emp.year}
      />

    </div>
  );
}
