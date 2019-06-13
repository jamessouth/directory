import React, { useEffect, useRef } from 'react';
import loading from '../loading.png';
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
      <img className={styles.img} src={props.isLoaded ? props.photo : loading} alt="employee"/>
      <p className={styles.name}>{props.isLoaded ? props.name : ''}</p>
      <p className={styles.user}>{props.isLoaded ? props.user : ''}</p>
      <p className={styles.email}>{props.isLoaded ? props.email : ''}</p>
      <p className={styles.city}>{props.isLoaded ? `${props.city}, USA` : ''}</p>
    </li>
  );
}
