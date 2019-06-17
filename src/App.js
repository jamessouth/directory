import React from 'react';
import Main from './components/Main';
import FetchError from './components/FetchError';
import useAppState from './util/useAppState';

export default function App() {

  const {
    employees,
    isLoaded,
    modalEmployee,
    isSinglet,
    last,
    isInputInUse,
    newSW,
    fetchError,
    handleModalClose,
    sortEmployees,
    handleModalNext,
    handleModalPrev,
    handleModalOpen,
    filterEmployees,
    handleInputFocus,
    handleInputBlur,
    handleNewSW,
    handleSWReload
  } = useAppState();

  return (
    <>
      {
        fetchError && <FetchError message={fetchError.message}/>
      }
      {
        !fetchError && <Main
          handleSort={sortEmployees}
          handleModalPrev={handleModalPrev}
          handleInputFocus={handleInputFocus}
          handleInputBlur={handleInputBlur}
          handleNewSW={handleNewSW}
          handleSWReload={handleSWReload}
          handleModalNext={handleModalNext}
          handleModalClose={handleModalClose}
          handleModalOpen={handleModalOpen}
          filter={filterEmployees}
          employees={employees}
          isLoaded={isLoaded}
          modalEmployee={modalEmployee}
          isSinglet={isSinglet}
          last={last}
          isInputInUse={isInputInUse}
          newSW={newSW}
        />
      }
    </>
  );
}
