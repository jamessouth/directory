import React from 'react';
import ModalNav from './ModalNav';
import '../styles/Modal.css';

const Modal = props => {

  let styles = {top: window.scrollY + 20};

  return (
    <div aria-live="polite" style={styles} onKeyUp={props.handleModalClose} className="hidden">
      <button autoFocus aria-label="close" onClick={props.handleModalClose} className="close">x</button>
      <ModalNav handleModalPrev={props.handleModalPrev} handleModalNext={props.handleModalNext} sing={props.sing}></ModalNav>
      <img src={props.emp.pic} alt="employee pic" />
      <div className="top-part">
        <p className="name">{props.emp.name}</p>
        <p className="user">{props.emp.user}</p>
        <p className="email">{props.emp.email}</p>
        <p className="city">{props.emp.location.city}</p>
      </div>
      <div className="bottom-part">
        <p className="phone">{props.emp.cell}</p>
        <p className="addy">{`${props.emp.location.street}, ${props.emp.location.city}, ${props.emp.location.state}, USA ${props.emp.location.postcode}`}</p>
        <p className="bday">{`Birthday: ${props.emp.mo}/${props.emp.day}/${props.emp.yr}`}</p>
      </div>
    </div>
  );
}

export default Modal;
