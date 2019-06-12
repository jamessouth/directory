import React from 'react';
import ModalTop from './ModalTop';
import ModalMiddle from './ModalMiddle';
import ModalBottom from './ModalBottom';
import '../styles/Modal.css';

export default function Modal(props) {
  return (
    <div aria-live="polite" onKeyUp={props.handleModalClose} className="hidden">

      <ModalTop
        handleModalPrev={props.handleModalPrev}
        handleModalNext={props.handleModalNext}
        handleModalClose={props.handleModalClose}
        photo={props.emp.photo}
        sing={props.sing}
      />

      <ModalMiddle
        name={props.emp.name}
        username={props.emp.username}
        email={props.emp.email}
        city={props.emp.city}
      />

      <ModalBottom
        cell={props.emp.cell}
        street={props.emp.street}
        city={props.emp.city}
        state={props.emp.state}
        postcode={props.emp.postcode}
        month={props.emp.month}
        day={props.emp.day}
        year={props.emp.year}
      />
      
    </div>
  );
}
