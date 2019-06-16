import React from 'react';
import {
  prev,
  next
} from '../styles/ModalNav.module.css';

export default function ModalNav({
  handleModalPrev,
  handleModalNext
}) {
  return (
    <>
      <button aria-label="previous" onClick={handleModalPrev} className={prev}>&lt;</button>
      <button aria-label="next" onClick={handleModalNext} className={next}>&gt;</button>
    </>
  );
}
