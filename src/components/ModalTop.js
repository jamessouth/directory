import React from 'react';
import ModalNav from './ModalNav';
import {
  close,
  img
} from '../styles/ModalTop.module.css';

export default function ModalTop({
  handleModalPrev,
  handleModalNext,
  handleModalClose,
  photo,
  sing
}) {
  return (
    <>
      <button autoFocus aria-label="close" onClick={handleModalClose} className={close}>x</button>
      {
        !sing && <ModalNav
          handleModalPrev={handleModalPrev}
          handleModalNext={handleModalNext}
        />
      }
      <img className={img} src={photo} alt="employee" />
    </>
  );
}
