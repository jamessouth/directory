import React, { useEffect } from 'react';
import Box from './Box';
import Input from './Input';
import Select from './Select';
import Modal from './Modal';
import SWNotify from './SWNotify';
import {
  overlay,
  h1_input
} from '../styles/Main.module.css';

export default function Main({
  handleSort,
  handleModalPrev,
  handleInputFocus,
  handleInputBlur,
  handleNewSW,
  handleSWReload,
  handleModalNext,
  handleModalClose,
  handleModalOpen,
  filter,
  employees,
  isLoaded,
  modalEmployee,
  singlet,
  last,
  inputInUse,
  newSW
}) {
  useEffect(() => {
    document.body.style.overflowY = !!modalEmployee ? 'hidden' : 'visible';
  });

  document.addEventListener('swUpdated', handleNewSW);

  return (
    <>
      {
        !!modalEmployee &&
        <>
          <div className={overlay} />
          <Modal
            handleModalPrev={handleModalPrev}
            handleModalNext={handleModalNext}
            handleModalClose={handleModalClose}
            emp={modalEmployee}
            sing={singlet}
          />
        </>
      }
      {
        !!newSW &&
        <SWNotify
          handleSWReload={handleSWReload}
        />
      }
      {
        isLoaded && <div className={h1_input} aria-hidden={!!modalEmployee}>
          <h1>awesome startup employee directory</h1>
          <Input
            handleInputBlur={handleInputBlur}
            handleInputFocus={handleInputFocus}
            isModalOpen={!!modalEmployee}
            filter={filter}
          />
          <Select
            isModalOpen={!!modalEmployee}
            handleSort={handleSort}
          />
        </div>
      }
      {
        isLoaded && <ul aria-hidden={!!modalEmployee}>
        {employees
          .filter(e => e.isVisible)
          .map((e, i) =>
            <Box
              isModalOpen={!!modalEmployee}
              inputInUse={inputInUse}
              focusBox={last || {key:'x'}}
              handleModalOpen={handleModalOpen}
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
