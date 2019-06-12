import React, { useEffect } from 'react';
import Box from './Box';
import Input from './Input';
import Select from './Select';
import Modal from './Modal';
import SWNotify from './SWNotify';
import '../styles/Main.css';

export default function Main(props) {
  useEffect(() => {
    document.body.style.overflowY = !props.state ? 'visible' : !!props.state.modalEmployee ? 'hidden' : 'visible';
  });

  document.addEventListener('swUpdated', props.handleNewSW);

  return (
    <>

      {
        props.state && !!props.state.modalEmployee &&
        <>
          <div className="overlay" />
          <Modal handleModalPrev={props.handleModalPrev} handleModalNext={props.handleModalNext} handleModalClose={props.handleModalClose} emp={props.state.modalEmployee} sing={props.state.singlet}>
          </Modal>
        </>
      }

      {
        props.state && !!props.state.newSW &&
        <SWNotify state={props.state} handleSWReload={props.handleSWReload}></SWNotify>
      }

      <div className="h1_input" aria-hidden={props.state && !!props.state.modalEmployee}>
        <h1>awesome startup employee directory</h1>
        <Input handleInputBlur={props.handleInputBlur} handleInputFocus={props.handleInputFocus} modalOpen={props.state && !!props.state.modalEmployee} filter={props.filter}></Input>
        <Select modalOpen={props.state && !!props.state.modalEmployee} handleSort={props.handleSort}></Select>
      </div>

      <ul aria-hidden={props.state && !!props.state.modalEmployee}>
        {props.state && props.state.employees
          .filter(e => e.isVisible)
          .map((e, i) =>
          <Box inputInUse={props.state.inputInUse} focusBox={props.state.last || {key:'x'}} modalOpen={!!props.state.modalEmployee} handleModalOpen={props.handleModalOpen} key={e.key} boxkey={e.key} isLoaded={props.state.isLoaded} photo={e.photo} name={e.name} user={e.username} email={e.email} city={e.city}></Box>
        )}
      </ul>

    </>
  );
}
