import React from 'react';
import ModalTop from './ModalTop';
import ModalMiddle from './ModalMiddle';
import ModalBottom from './ModalBottom';
import { hidden } from '../styles/Modal.module.css';

export default function Modal({
  handleModalPrev,
  handleModalNext,
  handleModalClose,
  emp : {
    photo,
    name,
    username,
    email,
    city,
    cell,
    street,
    state,
    postcode,
    month,
    day,
    year
  },
  isSinglet
}) {
  return (
    <div aria-live="polite" onKeyUp={handleModalClose} className={hidden}>

      <ModalTop
        handleModalPrev={handleModalPrev}
        handleModalNext={handleModalNext}
        handleModalClose={handleModalClose}
        photo={photo}
        isSinglet={isSinglet}
      />

      <ModalMiddle
        name={name}
        user={username}
        email={email}
        city={city}
      />

      <ModalBottom
        cell={cell}
        street={street}
        city={city}
        state={state}
        postcode={postcode}
        month={month}
        day={day}
        year={year}
      />

    </div>
  );
}
