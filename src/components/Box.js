import React, { useEffect, useRef } from 'react';
import {
  li,
  img,
  names,
  users,
  citys,
  emails
} from '../styles/Box.module.css';

export default function Box({
  modalOpen,
  inputInUse,
  focusBox,
  handleModalOpen,
  boxkey,
  photo,
  name,
  user,
  email,
  city
}) {
  const boxLi = useRef(null);
  useEffect(() => {
    if(!modalOpen && !inputInUse && boxLi.current.getAttribute('data-key') === focusBox.key){
      boxLi.current.focus();
    }
  });

  return (
    <li
      ref={boxLi}
      onKeyPress={handleModalOpen}
      onClick={handleModalOpen}
      data-key={boxkey}
      className={li}
      tabIndex={modalOpen ? "-1" : "0"}
    >
      <img className={img} src={photo} alt="employee"/>
      <p className={names}>{name}</p>
      <p className={users}>{user}</p>
      <p className={emails}>{email}</p>
      <p className={citys}>{`${city}, USA`}</p>
    </li>
  );
}
