import React, { useEffect, useRef } from 'react';
import styles from '../styles/Box.module.css';

export default function Box(props) {
  const boxLi = useRef(null);
  useEffect(() => {
    if(!props.modalOpen && !props.inputInUse && boxLi.current.getAttribute('data-key') === props.focusBox.key){
      boxLi.current.focus();
    }
  });

  return (
    <li ref={boxLi} onKeyPress={props.handleModalOpen} onClick={props.handleModalOpen} data-key={props.boxkey} className={styles.li} tabIndex={props.modalOpen ? "-1" : "0"}>
      <img className={styles.img} src={props.photo} alt="employee"/>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.user}>{props.user}</p>
      <p className={styles.email}>{props.email}</p>
      <p className={styles.city}>{`${props.city}, USA`}</p>
    </li>
  );
}
