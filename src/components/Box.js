import React, { useEffect, useRef } from 'react';
import styles from '../styles/Box.module.css';

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
      className={styles.li}
      tabIndex={modalOpen ? "-1" : "0"}
    >
      <img className={styles.img} src={photo} alt="employee"/>
      <p className={styles.name}>{name}</p>
      <p className={styles.user}>{user}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.city}>{`${city}, USA`}</p>
    </li>
  );
}
