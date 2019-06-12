import React, { useEffect, useRef } from 'react';
import loading from '../loading.png';
import '../styles/Box.css';

export default function Box(props) {
  const boxLi = useRef(null);
  useEffect(() => {
    if(!props.modalOpen && !props.inputInUse && boxLi.current.getAttribute('data-key') === props.focusBox.key){
      boxLi.current.focus();
    }
  });

  return (
    <li ref={boxLi} onKeyPress={props.handleModalOpen} onClick={props.handleModalOpen} data-key={props.boxkey} className="shown" tabIndex={props.modalOpen ? "-1" : "0"}>
      <img src={props.isLoaded ? props.photo : loading} alt="employee"/>
      <p className="name">{props.isLoaded ? props.name : ''}</p>
      <p className="user">{props.isLoaded ? props.user : ''}</p>
      <p className="email">{props.isLoaded ? props.email : ''}</p>
      <p className="city">{props.isLoaded ? `${props.city}, USA` : ''}</p>
    </li>
  );
}
