import React from 'react';
import ModalNav from './ModalNav';
import loading from '../loading.png';

export default function ModalTop(props) {
  return (
    <>
      <button autoFocus aria-label="close" onClick={props.handleModalClose} className="close">x</button>
      {
        !props.sing && <ModalNav handleModalPrev={props.handleModalPrev} handleModalNext={props.handleModalNext}></ModalNav>
      }
      <img src={props.photo || loading} alt="employee" />
    </>
  );
}
