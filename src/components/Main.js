import React, { useEffect } from 'react';
import Box from './Box';
import Input from './Input';
import Select from './Select';
import Modal from './Modal';
import SWNotify from './SWNotify';
import styles from '../styles/Main.module.css';

export default function Main(props) {
  useEffect(() => {
    document.body.style.overflowY = !props ? 'visible' : !!props.modalEmployee ? 'hidden' : 'visible';
  });

  document.addEventListener('swUpdated', props.handleNewSW);

  return (
    <>
      {
        props.modalEmployee &&
        <>
          <div className={styles.overlay} />
          <Modal
            handleModalPrev={props.handleModalPrev}
            handleModalNext={props.handleModalNext}
            handleModalClose={props.handleModalClose}
            emp={props.modalEmployee}
            sing={props.singlet}
          />
        </>
      }
      {
        props.newSW &&
        <SWNotify
          handleSWReload={props.handleSWReload}
        />
      }
      {
        props.isLoaded && <div className={styles.h1_input} aria-hidden={props && !!props.modalEmployee}>
          <h1>awesome startup employee directory</h1>
          <Input
            handleInputBlur={props.handleInputBlur}
            handleInputFocus={props.handleInputFocus}
            modalOpen={props && !!props.modalEmployee}
            filter={props.filter}
          />
          <Select
            modalOpen={props && !!props.modalEmployee}
            handleSort={props.handleSort}
          />
        </div>
      }
      {
        props.isLoaded && <ul aria-hidden={props && !!props.modalEmployee}>
        {props.employees
          .filter(e => e.isVisible)
          .map((e, i) =>
            <Box
              modalOpen={!!props.modalEmployee}
              inputInUse={props.inputInUse}
              focusBox={props.last || {key:'x'}}
              handleModalOpen={props.handleModalOpen}
              boxkey={e.key}
              photo={e.photo}
              name={e.name}
              user={e.username}
              email={e.email}
              city={e.city}
              key={e.key}
            />
          )}
        </ul>
      }
    </>
  );
}
